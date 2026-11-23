// Exports PNG versions of every SVG under static/web-assets, rendering each one
// in headless Chromium at 2x device scale so text and lines stay sharp.
//
// Usage:
//   npm run export-pngs                         every folder
//   npm run export-pngs -- --folder <name>      one folder, e.g. --folder housing
//   npm run export-pngs -- --overwrite          replace PNGs that already exist
//
// Writes static/web-assets/{folder}/images/{name}.png next to each SVG, and
// never overwrites an existing file unless --overwrite is passed.
//
// The SVGs reference the site's own fonts by name (OpenSans, OpenSansBold,
// TradeGothicBold, ...). Those aren't installed system-wide, so the page each
// SVG is rendered in declares them with @font-face from src/assets/fonts —
// otherwise Chromium would quietly substitute a fallback and the labels would
// reflow.

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const assetsDir = path.join(rootDir, 'static', 'web-assets');
const fontsDir = path.join(rootDir, 'src', 'assets', 'fonts');
const SCALE = 2;

// Working folders that aren't published assets (svg-convert is gitignored).
const IGNORED_DIRS = new Set(['svg-convert', 'images', 'card_thumbnails']);

// Font family names as they appear in the SVGs -> font file + face descriptors.
const FONT_FACES = [
	['OpenSans', 'OpenSans-Regular.ttf'],
	['OpenSansBold', 'OpenSans-Bold.ttf'],
	['OpenSansItalic', 'OpenSans-Italic.ttf'],
	['OpenSans-Italic', 'OpenSans-Italic.ttf'],
	['OpenSansBoldItalic', 'OpenSans-BoldItalic.ttf'],
	['Open Sans', 'OpenSans-Regular.ttf', 'normal', 'normal'],
	['Open Sans', 'OpenSans-Bold.ttf', 'bold', 'normal'],
	['Open Sans', 'OpenSans-Italic.ttf', 'normal', 'italic'],
	['Open Sans', 'OpenSans-BoldItalic.ttf', 'bold', 'italic'],
	['TradeGothic', 'Trade Gothic LT.ttf'],
	['TradeGothicBold', 'Trade Gothic LT Bold.ttf'],
	['TradeGothicOblique', 'Trade Gothic LT Oblique.ttf'],
	['TradeGothicBoldOblique', 'Trade Gothic LT Bold Oblique.ttf'],
	['TradeGothicLTLight', 'Trade Gothic LT Light.ttf'],
	['TradeGothicLTLightOblique', 'Trade Gothic LT Light Oblique.ttf']
];

// PostScript names exported by Illustrator that map onto system fonts.
const LOCAL_ALIASES = [
	['ArialMT', 'Arial'],
	['Calibri', 'Calibri']
];

function parseArgs(argv) {
	const args = { folder: null, overwrite: false };
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === '--folder') args.folder = argv[++i];
		else if (arg === '--overwrite') args.overwrite = true;
	}
	return args;
}

function usageError(message) {
	console.error(`Error: ${message}\n`);
	console.error('Usage:');
	console.error('  npm run export-pngs -- [--folder <name>] [--overwrite]');
	process.exit(1);
}

/** Recursively collects .svg files, skipping IGNORED_DIRS. */
function findSvgs(dir) {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (!IGNORED_DIRS.has(entry.name)) out.push(...findSvgs(full));
		} else if (entry.name.toLowerCase().endsWith('.svg')) {
			out.push(full);
		}
	}
	return out;
}

/**
 * Builds @font-face rules with the fonts inlined as data URIs, since the page
 * is created with setContent (about:blank) and can't load file:// URLs.
 */
function buildFontCss() {
	const cache = new Map();
	const dataUri = (file) => {
		if (!cache.has(file)) {
			const b64 = fs.readFileSync(path.join(fontsDir, file)).toString('base64');
			cache.set(file, `data:font/ttf;base64,${b64}`);
		}
		return cache.get(file);
	};

	const rules = FONT_FACES.filter(([, file]) => fs.existsSync(path.join(fontsDir, file))).map(
		([family, file, weight = 'normal', style = 'normal']) =>
			`@font-face { font-family: '${family}'; src: url(${dataUri(file)}) format('truetype'); font-weight: ${weight}; font-style: ${style}; }`
	);
	for (const [family, local] of LOCAL_ALIASES) {
		rules.push(`@font-face { font-family: '${family}'; src: local('${local}'); }`);
	}
	return rules.join('\n');
}

async function main() {
	const args = parseArgs(process.argv.slice(2));

	let searchDir = assetsDir;
	if (args.folder) {
		searchDir = path.join(assetsDir, args.folder);
		if (!fs.existsSync(searchDir)) usageError(`no folder static/web-assets/${args.folder}`);
	}

	const svgs = findSvgs(searchDir).sort();
	if (svgs.length === 0) usageError(`no SVGs found under ${path.relative(rootDir, searchDir)}`);

	console.log(`Exporting ${svgs.length} SVG(s)...`);

	const fontCss = buildFontCss();
	const browser = await chromium.launch();
	const context = await browser.newContext({
		viewport: { width: 1200, height: 800 },
		deviceScaleFactor: SCALE
	});
	const page = await context.newPage();

	let wrote = 0;
	let skipped = 0;
	let failed = 0;

	for (const svgPath of svgs) {
		const outDir = path.join(path.dirname(svgPath), 'images');
		const outPath = path.join(outDir, `${path.basename(svgPath, path.extname(svgPath))}.png`);
		const relPath = path.relative(rootDir, outPath);

		if (fs.existsSync(outPath) && !args.overwrite) {
			console.log(`skip (exists): ${relPath}`);
			skipped++;
			continue;
		}

		try {
			// Inline rather than <img src>, so the SVG's text can use the page's fonts.
			const svg = fs.readFileSync(svgPath, 'utf8').replace(/<\?xml[^>]*\?>/, '');
			await page.setContent(
				`<!doctype html><html><head><style>${fontCss}
				html, body { margin: 0; padding: 0; background: transparent; }
				body > svg { display: block; }
				</style></head><body>${svg}</body></html>`,
				{ waitUntil: 'load' }
			);

			// An SVG with only a viewBox would otherwise render at the browser's
			// default 300x150 or stretch to the viewport; give it its natural size.
			const size = await page.evaluate(async () => {
				await document.fonts.ready;
				const el = document.querySelector('body > svg');
				if (!el.getAttribute('width') && el.viewBox.baseVal && el.viewBox.baseVal.width) {
					el.setAttribute('width', el.viewBox.baseVal.width);
					el.setAttribute('height', el.viewBox.baseVal.height);
				}
				const box = el.getBoundingClientRect();
				return { width: Math.ceil(box.width), height: Math.ceil(box.height) };
			});

			// Viewport must be at least as large as the SVG or it gets clipped.
			await page.setViewportSize({
				width: Math.max(size.width, 1),
				height: Math.max(size.height, 1)
			});

			fs.mkdirSync(outDir, { recursive: true });
			await page.locator('body > svg').screenshot({ path: outPath, omitBackground: true });

			const kb = (fs.statSync(outPath).size / 1024).toFixed(0);
			console.log(
				`${args.overwrite ? 'overwrote' : 'wrote'}: ${relPath}  (${size.width * SCALE}x${size.height * SCALE}, ${kb} KB)`
			);
			wrote++;
		} catch (err) {
			console.error(`failed: ${path.relative(rootDir, svgPath)}\n  ${err.message}`);
			failed++;
		}
	}

	await browser.close();

	console.log(`\nDone: ${wrote} written, ${skipped} skipped, ${failed} failed.`);
	if (failed) process.exit(1);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
