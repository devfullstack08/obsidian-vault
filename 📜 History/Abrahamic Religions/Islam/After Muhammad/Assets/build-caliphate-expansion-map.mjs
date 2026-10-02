// Rebuild: node build-caliphate-expansion-map.mjs /path/to/ne_110m_land.geojson
// Coastline: Natural Earth 1:110m, public domain.
// The shaded extent is a teaching guide for about 750 CE, not a surveyed border.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const land = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const W = 1600;
const H = 980;
const box = {x: 48, y: 128, w: 1504, h: 680};
const LON0 = -12;
const LON1 = 78;
const LAT0 = 8;
const LAT1 = 52;

const xy = ([lon, lat]) => [
  box.x + ((lon - LON0) / (LON1 - LON0)) * box.w,
  box.y + ((LAT1 - lat) / (LAT1 - LAT0)) * box.h,
];
const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const line = (points) => points.map((p, i) => (i ? 'L' : 'M') + xy(p).map((n) => n.toFixed(1)).join(',')).join(' ');
const ring = (points) => `${line(points)} Z`;

const empire = [
  [[-9.7, 36.6], [-9.2, 42.0], [-1.5, 43.2], [3.0, 42.2], [0.4, 37.4], [-5.5, 36.0]],
  [[-10.2, 28.2], [-9.2, 33.5], [-6.2, 36.0], [-5.3, 36.05], [10.5, 37.2], [11.2, 32.5], [9.5, 30.0], [2.0, 28.0], [-4.0, 27.2]],
  [[24.6, 22.0], [25.0, 31.6], [36.4, 31.2], [35.2, 27.8], [34.2, 22.4]],
  [[34.2, 27.6], [36.4, 29.2], [38.2, 29.6], [48.5, 28.8], [52.2, 26.2], [59.2, 25.2], [59.4, 22.0], [54.0, 16.5], [43.5, 12.4], [38.5, 18.5], [36.2, 24.0]],
  [[34.8, 31.2], [35.8, 36.6], [40.5, 37.2], [44.5, 39.4], [48.8, 40.2], [54.5, 38.6], [60.5, 37.4], [63.2, 34.2], [61.5, 27.4], [56.2, 26.6], [50.5, 27.2], [44.2, 30.0], [38.5, 33.2]],
  [[56.5, 36.2], [58.5, 42.2], [69.5, 42.6], [71.5, 39.2], [68.0, 36.4], [62.0, 35.2]],
  [[61.5, 25.2], [65.5, 27.6], [69.2, 28.8], [70.4, 24.2], [67.2, 23.4], [63.2, 24.2]],
];

const places = [
  ['Cordoba', [-4.78, 37.88], -8, -14],
  ['Tours — stopped, 732', [0.68, 47.39], 12, -8],
  ['Constantinople — not taken', [28.98, 41.01], 12, -10],
  ['Damascus', [36.28, 33.51], -92, -14],
  ['Medina', [39.61, 24.47], 10, -12],
  ['Mecca', [39.83, 21.42], 10, 20],
  ['Kufa', [44.42, 32.03], -48, 20],
  ['Karbala', [44.02, 32.62], -70, -14],
  ['Ctesiphon', [44.58, 33.09], 12, 16],
  ['Nishapur', [58.8, 36.21], 10, -12],
  ['Bukhara', [64.42, 39.77], -78, -12],
  ['Samarkand', [66.97, 39.65], 10, -12],
  ['Debal', [67.52, 24.75], 10, 22],
];

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
svg += `<defs><clipPath id="map"><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}"/></clipPath></defs>`;
svg += `<rect width="${W}" height="${H}" fill="#faf7ef"/>`;
svg += `<style>
text{font-family:Arial,sans-serif;fill:#243036}
.place{font-size:16px;font-weight:bold;paint-order:stroke;stroke:#faf7ef;stroke-width:4px;stroke-linejoin:round}
.region{font-size:18px;fill:#6e685c;letter-spacing:1.5px}
.small{font-size:15px;fill:#3d474b}
.stop{font-size:15px;font-weight:bold;fill:#8a2e2e;paint-order:stroke;stroke:#faf7ef;stroke-width:4px}
</style>`;
svg += `<text x="48" y="46" font-size="30" font-weight="bold">From Central Asia to Spain — within a century of 632</text>`;
svg += `<text x="48" y="80" font-size="18">Muhammad died in 632 with power consolidated in Arabia. By about 750 the caliphate reached Spain, North Africa, Egypt, Syria, Iraq, Iran, Central Asia and Sindh.</text>`;
svg += `<text x="48" y="108" font-size="16" fill="#5c564c">Orange = approximate empire about a century later. Darker orange = Arabia at his death. Red labels = limits, not conquests.</text>`;
svg += `<g clip-path="url(#map)"><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" fill="#d7e6ec"/>`;

for (const f of land.features) {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const p of polys) svg += `<path d="${p.map((r) => line(r) + ' Z').join(' ')}" fill="#efe6d2" stroke="#b7ad98" stroke-width="1"/>`;
}

for (const part of empire) svg += `<path d="${ring(part)}" fill="#e08a3c" fill-opacity="0.55" stroke="#c56a1a" stroke-width="1.5"/>`;
svg += `<path d="${ring(empire[3])}" fill="#c4511d" fill-opacity="0.38" stroke="none"/>`;

const label = (s, p, cls = 'region') => {
  const [x, y] = xy(p);
  svg += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" class="${cls}">${esc(s)}</text>`;
};
label('SPAIN', [-7.2, 40.2]);
label('NORTH AFRICA', [-2, 31.5]);
label('EGYPT', [28.2, 27.2]);
label('ARABIA', [44.5, 23.5]);
label('IRAN', [53.2, 31.2]);
label('CENTRAL ASIA', [62.2, 44.6]);
label('SINDH', [66.6, 26.6]);
label('Mediterranean Sea', [16, 35.2]);
label('NOT CONQUERED', [31.2, 39.4]);

for (const [name, p, dx, dy] of places) {
  const [x, y] = xy(p);
  const stop = name.includes('not') || name.includes('stopped');
  svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${stop ? 5 : 4.5}" fill="${stop ? '#8a2e2e' : '#1e2a2e'}"/>`;
  svg += `<text x="${(x + dx).toFixed(1)}" y="${(y + dy).toFixed(1)}" class="${stop ? 'stop' : 'place'}">${esc(name)}</text>`;
}

svg += '</g>';
svg += `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" fill="none" stroke="#c4bba8"/>`;

svg += `<rect x="48" y="832" width="22" height="14" fill="#c4511d" fill-opacity="0.7"/><text x="78" y="844" class="small">Arabia when Muhammad died, 632</text>`;
svg += `<rect x="430" y="832" width="22" height="14" fill="#e08a3c" fill-opacity="0.8"/><text x="460" y="844" class="small">Caliphate about a century later</text>`;
svg += `<circle cx="792" cy="839" r="5" fill="#8a2e2e"/><text x="804" y="844" class="small">Checked or not taken</text>`;

svg += `<text x="48" y="886" class="small">Dates to say aloud: Spain 711 · Sindh 712 · Central Asia by the 710s · western raid stopped at Tours 732 · Constantinople was besieged and not taken.</text>`;
svg += `<text x="48" y="916" class="small">Damascus became the Umayyad capital. Baghdad was founded in 762, after this century, so it is not on this map.</text>`;
svg += `<text x="48" y="948" class="small">Shade is a classroom guide, not an exact frontier. Coastline: Natural Earth 1:110m, public domain. Equirectangular projection.</text>`;
svg += '</svg>';

fs.writeFileSync(path.join(dir, 'early-caliphate-spain-to-central-asia.svg'), svg);
console.log('wrote early-caliphate-spain-to-central-asia.svg');
