// Rebuild: node build-ghazni-routes-map.mjs /path/to/ne_110m_land.geojson
// Coastline: Natural Earth 1:110m, public domain.
// Routes are teaching guides, not surveyed march tracks.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const land = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const W = 1500;
const H = 980;
const box = {x: 36, y: 118, w: 1428, h: 700};
const LON0 = 66;
const LON1 = 82.2;
const LAT0 = 19.2;
const LAT1 = 36.2;

const xy = ([lon, lat]) => [
  box.x + ((lon - LON0) / (LON1 - LON0)) * box.w,
  box.y + ((LAT1 - lat) / (LAT1 - LAT0)) * box.h,
];
const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const line = (points) => points.map((p, i) => (i ? 'L' : 'M') + xy(p).map((n) => n.toFixed(1)).join(',')).join(' ');

const north = [[68.42, 33.55], [69.4, 34.15], [71.58, 34.02], [74.2, 31.8], [76.82, 29.97], [77.67, 27.49], [79.92, 27.05]];
const kangra = [[74.2, 31.8], [76.27, 32.1]];
const chandela = [[77.67, 27.49], [78.18, 26.22], [80.48, 24.98]];
const somnath = [[68.42, 33.55], [70.0, 31.6], [71.47, 30.2], [71.15, 27.4], [70.55, 24.2], [70.4, 20.88]];
const failed = [[71.58, 34.02], [73.4, 34.55]];

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
svg += `<defs><clipPath id="map"><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}"/></clipPath>`;
svg += `<marker id="n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#1e5f8a"/></marker>`;
svg += `<marker id="s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#b85a1a"/></marker>`;
svg += `<marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#8a2e2e"/></marker>`;
svg += `</defs>`;
svg += `<rect width="${W}" height="${H}" fill="#faf7ef"/>`;
svg += `<style>
text{font-family:Arial,sans-serif;fill:#243036}
.place{font-size:16px;font-weight:bold;paint-order:stroke;stroke:#faf7ef;stroke-width:4px}
.year{font-size:13px;fill:#3d474b;paint-order:stroke;stroke:#faf7ef;stroke-width:3px}
.region{font-size:15px;fill:#6e685c;letter-spacing:1px}
.small{font-size:15px;fill:#3d474b}
</style>`;
svg += `<text x="36" y="42" font-size="28" font-weight="bold">Mahmud's roads from Ghazni, 998-1030</text>`;
svg += `<text x="36" y="74" font-size="17">Blue: into the northwest and the Ganga plain. Orange: Multan, then the desert, to Somnath in Gujarat. Both lines start at Ghazni and come back.</text>`;
svg += `<text x="36" y="100" font-size="15" fill="#5c564c">Dashed lines are classroom guides, not the exact path of each army. He did not make Delhi his capital.</text>`;
svg += `<g clip-path="url(#map)"><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" fill="#d7e6ec"/>`;

for (const f of land.features) {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const p of polys) svg += `<path d="${p.map((r) => line(r) + ' Z').join(' ')}" fill="#efe6d2" stroke="#b7ad98" stroke-width="1"/>`;
}

const draw = (pts, color, marker, dash) => {
  svg += `<path d="${line(pts)}" fill="none" stroke="${color}" stroke-width="4" ${dash ? `stroke-dasharray="${dash}"` : ''} marker-end="url(#${marker})"/>`;
};
draw(north, '#1e5f8a', 'n', '10 6');
draw(kangra, '#1e5f8a', 'n', '10 6');
draw(chandela, '#1e5f8a', 'n', '10 6');
draw(somnath, '#b85a1a', 's', '2 7');
draw(failed, '#8a2e2e', 'f', '4 5');

const region = (s, p) => {
  const [x, y] = xy(p);
  svg += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" class="region">${esc(s)}</text>`;
};
region('AFGHANISTAN', [66.4, 35.2]);
region('PUNJAB', [73.2, 31.0]);
region('THAR DESERT', [71.6, 26.2]);
region('GUJARAT', [72.6, 22.4]);
region('GANGA PLAIN', [79.2, 28.3]);

const places = [
  ['Ghazni', [68.42, 33.55], 12, -12, true],
  ['Peshawar, 1001', [71.58, 34.02], 10, -14, false],
  ['Waihind, 1008', [72.35, 33.85], -8, 22, false],
  ['Multan, 1006', [71.47, 30.2], -118, 6, false],
  ['Nagarkot, 1009', [76.27, 32.1], 8, -12, false],
  ['Thanesar, 1014', [76.82, 29.97], 10, -12, false],
  ['Mathura', [77.67, 27.49], -78, 20, false],
  ['Kannauj, 1018', [79.92, 27.05], 8, -10, false],
  ['Gwalior', [78.18, 26.22], -70, 18, false],
  ['Kalinjar, 1022', [80.48, 24.98], 8, 16, false],
  ['Somnath, 1025', [70.4, 20.88], 12, 4, false],
  ['Delhi — not his capital', [77.21, 28.61], 10, -8, false],
  ['Lohkot, 1015, failed', [73.5, 34.7], 8, -8, false],
];

for (const [name, p, dx, dy, home] of places) {
  const [x, y] = xy(p);
  const failedPlace = name.includes('failed') || name.includes('not his');
  svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${home ? 7 : 4.5}" fill="${home ? '#1e3a4c' : failedPlace ? '#8a2e2e' : '#1e2a2e'}"/>`;
  svg += `<text x="${(x + dx).toFixed(1)}" y="${(y + dy).toFixed(1)}" class="place">${esc(name)}</text>`;
}

svg += '</g>';
svg += `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" fill="none" stroke="#c4bba8"/>`;
svg += `<path d="M36,848 h46" stroke="#1e5f8a" stroke-width="4" stroke-dasharray="10 6"/><text x="92" y="854" class="small">North India, 1001-1022: Peshawar, Kangra, Thanesar, Mathura, Kannauj, Gwalior, Kalinjar</text>`;
svg += `<path d="M36,882 h46" stroke="#b85a1a" stroke-width="4" stroke-dasharray="2 7"/><text x="92" y="888" class="small">Gujarat, 1025-26: Ghazni to Multan, across the desert, to Somnath. Return attacked in Sindh, 1027.</text>`;
svg += `<path d="M36,916 h46" stroke="#8a2e2e" stroke-width="4" stroke-dasharray="4 5"/><text x="92" y="922" class="small">Failed push toward Kashmir, 1015. Red is a stop, not a conquest.</text>`;
svg += `<text x="36" y="958" class="small">He annexed the Punjab frontier and raided beyond it. The deep raids ended back at Ghazni. Coastline: Natural Earth, public domain.</text>`;
svg += '</svg>';

fs.writeFileSync(path.join(dir, 'ghazni-to-india-routes.svg'), svg);
console.log('wrote ghazni-to-india-routes.svg');
