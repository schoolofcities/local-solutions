"""Makes a <name>-notitle.svg copy of each graphic under graphics/, without the
parts ChartFrame already shows in HTML: the title, the subtitle under it, the
data source line(s), and the yellow frame (corner square and top/bottom rules).
The canvas is then cropped to what's left, plus MARGIN above and below.

Usage:
  npm run notitle-svgs                             every folder
  npm run notitle-svgs -- --folder housing         one folder
  npm run notitle-svgs -- path/to/chart.svg ...    specific files
  npm run notitle-svgs -- --overwrite              replace existing copies

Writes each copy next to its SVG, and never overwrites an existing
-notitle.svg unless --overwrite is passed. drafts/ and archived/ folders are
skipped.

Needs Inkscape 1.x: its --query-all gives each element's rendered bounding
box, which is what the detection and the crop work from. Found on PATH, at
$INKSCAPE, or in the default Windows install location.

Detection is heuristic, so look over the results. It assumes the house layout:
a TradeGothic title top left (beside the yellow square), an optional subtitle
directly below it, and a "Data source:" note at the bottom. A summary of what
was removed from each file is printed so misfires are easy to spot. Big stat
numbers (over ~29px) are deliberately not treated as titles.
"""
import argparse
import os
import re
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GRAPHICS = ROOT / 'graphics'
IGNORED_DIRS = {'drafts', 'archived'}  # compared case-insensitively
# Not single charts: a grid of stat panels with a placeholder note.
IGNORED_FILES = {'intro_stats.svg'}
SUFFIX = '-notitle'
MARGIN = 10  # display px, top and bottom

NS = {
    '': 'http://www.w3.org/2000/svg',
    'inkscape': 'http://www.inkscape.org/namespaces/inkscape',
    'sodipodi': 'http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd',
    'xlink': 'http://www.w3.org/1999/xlink',
}
for prefix, uri in NS.items():
    ET.register_namespace(prefix, uri)
SVG = '{http://www.w3.org/2000/svg}'
DRAW = {'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'text', 'image', 'use'}
NOT_RENDERED = {'defs', 'clipPath', 'mask', 'pattern', 'marker', 'symbol', 'metadata', 'namedview'}
UNIT_PX = {'': 1, 'px': 1, 'in': 96, 'pt': 96 / 72, 'mm': 96 / 25.4, 'cm': 96 / 2.54}


def find_inkscape():
    for candidate in (os.environ.get('INKSCAPE'), shutil.which('inkscape'),
                      r'C:\Program Files\Inkscape\bin\inkscape.com'):
        if candidate and Path(candidate).exists():
            return candidate
    sys.exit('Inkscape not found: install it, put it on PATH, or set INKSCAPE.')


def query_bboxes(inkscape, path):
    """{id: (x, y, w, h)} in display px, for every element with an id."""
    out = subprocess.run([inkscape, '--query-all', str(path)], capture_output=True, text=True).stdout
    rows = (line.split(',') for line in out.splitlines() if line.count(',') == 4)
    return {r[0]: tuple(map(float, r[1:])) for r in rows}


def parse_length(value):
    m = re.fullmatch(r'\s*([\d.]+)\s*([a-z]*)\s*', value)
    return float(m.group(1)), m.group(2)


def tag(e):
    return e.tag.split('}')[-1]


def styles(e):
    """All style declarations and presentation attributes in e's subtree."""
    s = ''
    for c in e.iter():
        s += ';' + (c.get('style') or '')
        for attr in ('font-size', 'font-family', 'font-weight', 'fill'):
            if c.get(attr):
                s += f';{attr}:{c.get(attr)}'
    return s


def own_font_size(n):
    m = re.search(r'font-size:\s*([\d.]+)', n.get('style') or '')
    if m:
        return float(m.group(1))
    m = re.match(r'\s*([\d.]+)', n.get('font-size') or '')
    return float(m.group(1)) if m else None


def font_px(e, scale, parent):
    """Display size of the first node in e that actually holds text, inherited
    up the tree (nested tspans sometimes carry unrelated, unused sizes)."""
    for n in e.iter():
        if (n.text or '').strip():
            p = n
            while p is not None:
                size = own_font_size(p)
                if size:
                    return size * scale
                p = parent.get(p)
    return 0


def is_yellow(e):
    s = f"{e.get('style') or ''};fill:{e.get('fill') or ''};stroke:{e.get('stroke') or ''}"
    return re.search(r'(fill|stroke):\s*#f[01]c[45]0[0-9a-f]?\b', s, re.I) is not None


def make_notitle(inkscape, src, dst):
    tree = ET.parse(src)
    root = tree.getroot()
    parent = {c: p for p in root.iter() for c in p}

    # Inkscape only reports elements that have ids (Illustrator exports often
    # don't), so give the rest temporary ones for the query and strip them after.
    added_ids = []
    for i, e in enumerate(root.iter()):
        if isinstance(e.tag, str) and e.get('id') is None:
            e.set('id', f'__notitle{i}')
            added_ids.append(e)
    tmp = dst.with_name(dst.name + '.tmp.svg')
    try:
        tree.write(tmp, encoding='UTF-8', xml_declaration=True)
        bb = query_bboxes(inkscape, tmp)
    finally:
        tmp.unlink(missing_ok=True)

    w_val, w_unit = parse_length(root.get('width'))
    h_val, h_unit = parse_length(root.get('height'))
    vb = [float(v) for v in root.get('viewBox').replace(',', ' ').split()]
    scale = w_val * UNIT_PX[w_unit] / vb[2]  # display px per user unit
    doc_w, doc_h = w_val * UNIT_PX[w_unit], h_val * UNIT_PX[h_unit]

    def not_rendered(e):
        p = parent.get(e)
        while p is not None:
            if tag(p) in NOT_RENDERED:
                return True
            p = parent.get(p)
        return False

    texts = []
    for e in root.iter(SVG + 'text'):
        b = bb.get(e.get('id'))
        text = ' '.join(''.join(e.itertext()).split())
        if b and text and not not_rendered(e):
            texts.append(dict(e=e, b=b, t=text, fs=font_px(e, scale, parent)))

    # Yellow frame. The corner square goes by geometry alone (some have their
    # fill set by a class); the rules must be yellow hairlines, full width or
    # along the top/bottom edge.
    deco = []
    for e in root.iter():
        b = bb.get(e.get('id'))
        if not b or tag(e) not in ('rect', 'path') or not_rendered(e):
            continue
        square = b[0] < 1 and 16 <= b[2] <= 21 and 16 <= b[3] <= 21
        at_edge = b[1] < 6 or b[1] + b[3] > doc_h - 6
        rule = is_yellow(e) and b[3] < 2 and (b[2] >= 0.9 * doc_w or (b[2] >= 0.4 * doc_w and at_edge))
        if square or rule:
            deco.append(e)
    square_ys = [bb[e.get('id')][1] for e in deco if bb[e.get('id')][2] < 25]

    # Title: heading-size text at the left, at the top or beside the yellow
    # square (which isn't always at the top), plus its further lines and any
    # pieces of a line split up for kerning.
    candidates = sorted(
        (t for t in texts if 14 <= t['fs'] <= 29 and 15 <= t['b'][0] <= 40
         and (t['b'][1] < 40 or any(abs(t['b'][1] - y) < 12 for y in square_ys))),
        key=lambda t: t['b'][1])
    title = candidates[:1]
    if title:
        fs0 = title[0]['fs']
        for t in sorted(texts, key=lambda t: (t['b'][1], t['b'][0])):
            if t in title or abs(t['fs'] - fs0) >= 1:
                continue
            last = title[-1]['b']
            next_line = abs(t['b'][0] - title[0]['b'][0]) < 6 and 0 <= t['b'][1] - (last[1] + last[3]) < 12
            same_line = any(abs(t['b'][1] - p['b'][1]) < 3 and 0 <= t['b'][0] - (p['b'][0] + p['b'][2]) < 10
                            for p in title)
            if next_line or same_line:
                title.append(t)

    # Subtitle: starting just below the title, aligned with it or a little to
    # its left (never right of it, where legends sit). Not axis tick labels
    # ("300 housing starts per 10K households") or bold legend labels.
    subtitle = []
    if title:
        tx = title[0]['b'][0]
        title_bottom = max(t['b'][1] + t['b'][3] for t in title)
        for t in sorted(texts, key=lambda t: t['b'][1]):
            if t in title or not -14 <= t['b'][0] - tx <= 4 or t['fs'] < 9:
                continue
            if re.match(r'\d', t['t']) or re.search(r'bold|font-weight:\s*(700|bold)', styles(t['e']), re.I):
                continue
            above = (subtitle[-1]['b'][1] + subtitle[-1]['b'][3]) if subtitle else title_bottom
            if 0 <= t['b'][1] - above < (6 if subtitle else 20):
                subtitle.append(t)

    # Data source: the line that starts it, and every small left-hand line
    # from there down (continuations, notes).
    source = [t for t in texts if re.match(r'\s*(Data sources?\b|Adapted from|\*?Based on data)', t['t'], re.I)]
    if source:
        source_top = min(t['b'][1] for t in source)
        source += [t for t in texts if t not in source and t['b'][1] >= source_top - 1
                   and t['b'][0] < 45 and t['fs'] <= 14]

    removed = set()
    for e in deco + [t['e'] for t in title + subtitle + source]:
        if e in removed or e not in parent:
            continue
        parent[e].remove(e)
        removed.update(e.iter())

    # Crop to the remaining drawn leaves, each clipped by any clip-path on its
    # ancestors, ignoring full-canvas backgrounds and anything off the canvas.
    top, bottom = float('inf'), float('-inf')
    for e in root.iter():
        if tag(e) not in DRAW or e in removed or not_rendered(e):
            continue
        if tag(e) != 'text' and any(tag(c) in DRAW for c in e):
            continue
        b = bb.get(e.get('id'))
        if not b or b[2] <= 0 or b[3] < 0:
            continue
        if tag(e) in ('rect', 'image') and b[2] >= 0.95 * doc_w and b[3] >= 0.8 * doc_h:
            continue
        y0, y1 = b[1], b[1] + b[3]
        p = e
        while p is not None:
            if p.get('clip-path') and p.get('id') in bb:
                clip = bb[p.get('id')]
                y0, y1 = max(y0, clip[1]), min(y1, clip[1] + clip[3])
            p = parent.get(p)
        if (y1 <= y0 and b[3] > 0) or y1 < 0 or y0 > doc_h:
            continue
        top, bottom = min(top, max(y0, 0)), max(bottom, min(y1, doc_h))
    if top > bottom:
        raise RuntimeError('nothing left to crop to')

    # Cropped by moving the viewBox, so the artwork itself isn't touched.
    new_top = max(top - MARGIN, 0)
    new_h = min(bottom + MARGIN, doc_h) - new_top
    vb[1] += new_top / scale
    vb[3] = new_h / scale
    for e in added_ids:
        del e.attrib['id']
    root.set('viewBox', ' '.join(f'{v:g}' for v in vb))
    root.set('height', f'{new_h / UNIT_PX[h_unit]:.5g}{h_unit}')
    docname = '{%s}docname' % NS['sodipodi']
    if root.get(docname):
        root.set(docname, dst.name)
    tree.write(dst, encoding='UTF-8', xml_declaration=True)

    def summary(ts):
        return ' | '.join(t['t'][:50] for t in ts) or '-'
    return (f'  title:    {summary(title)}\n  subtitle: {summary(subtitle)}\n  source:   {summary(source)}\n'
            f'  frame pieces: {len(deco)}, height {doc_h:.0f} -> {new_h:.0f}px')


def all_graphics(folder=None):
    base = GRAPHICS / folder if folder else GRAPHICS
    if not base.is_dir():
        sys.exit(f'No such folder: {base}')
    for path in sorted(base.rglob('*.svg')):
        rel = path.relative_to(GRAPHICS)
        if any(part.lower() in IGNORED_DIRS for part in rel.parts[:-1]):
            continue
        if path.stem.endswith(SUFFIX) or path.name in IGNORED_FILES:
            continue
        yield path


def main():
    parser = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    parser.add_argument('files', nargs='*', type=Path, help='SVGs to process (default: all under graphics/)')
    parser.add_argument('--folder', help='only this folder under graphics/, e.g. housing')
    parser.add_argument('--overwrite', action='store_true', help='replace existing -notitle copies')
    args = parser.parse_args()

    inkscape = find_inkscape()
    sources = [f.resolve() for f in args.files] or list(all_graphics(args.folder))
    made = skipped = failed = 0
    for src in sources:
        dst = src.with_name(src.stem + SUFFIX + '.svg')
        rel = src.relative_to(ROOT) if src.is_relative_to(ROOT) else src
        if dst.exists() and not args.overwrite:
            skipped += 1
            continue
        print(f'{rel}')
        try:
            print(make_notitle(inkscape, src, dst), flush=True)
            made += 1
        except Exception as err:  # keep going; report at the end
            print(f'  FAILED: {err}', flush=True)
            failed += 1
    print(f'\n{made} written, {skipped} skipped (already exist; --overwrite to replace), {failed} failed')
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main())
