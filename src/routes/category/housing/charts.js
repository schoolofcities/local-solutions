import { resolveDownloads } from '$lib/ChartFrame/downloads.js';

const dataUrls = import.meta.glob('./data/*', { eager: true, query: '?url', import: 'default' });
const pngUrls = import.meta.glob('./published/*/*.png', {
	eager: true,
	query: '?url',
	import: 'default'
});
const embedMeta = import.meta.glob('./published/*/embed.json', {
	eager: true,
	import: 'default'
});

const charts = {
	'housing_starts-households-chart': {
		title: 'Housing starts in Canada from 1955 to 2024',
		source: 'Statistics Canada (2025) Canada Mortgage and Housing Corporation. Table: 34-10-0126-01',
		note: 'Estimated household counts for non-census years were calculated via weighted linear interpolation using census counts and annual population.',
		alt: 'Chart of housing starts per 10,000 households in Canada from 1955 to 2024, broken down into single-detached, semi-detached, row, and apartment or other units.',
		widths: [360, 720],
		image: 'housing_starts-households-chart'
	},
	'housing_FAA-housing-units': {
		title: 'Federally assisted affordable housing units in Canada',
		source: 'CMHC’s Canadian Housing Statistics, multiple years. Adapted from a chart by Brian Clifford in St. Denis (2022) “Why Can’t We Build Like It’s the 1970s?” The Tyee.',
		alt: 'Chart of the number of federally assisted affordable housing units built per year in Canada from the 1950s to the 2010s.',
		widths: [360, 720],
		image: 'housing_FAA-housing-units'
	},
	'housing_typology-tree-map': {
		title: 'Distribution of types of housing across Canada in 2021',
		source: 'Statistics Canada (2021) Census',
		alt: 'Tree map showing the share of Canada’s housing in 2021 made up of each housing type, including single-detached houses, semi-detached houses, apartments in buildings, and apartments or flats in duplexes.',
		widths: [360, 720],
		image: 'housing_typology-tree-map'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
