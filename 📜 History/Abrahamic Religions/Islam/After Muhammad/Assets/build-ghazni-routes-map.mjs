// Rebuild: node build-ghazni-routes-map.mjs /path/to/ne_110m_land.geojson
// Coastline: Natural Earth 1:110m, public domain.
// Routes are teaching guides, not surveyed march tracks.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const land = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const W = 1680;
const H = 1240;
const box = {x: 28, y: 108, w: 1624, h: 880};
const LON0 = 65.5;
const LON1 = 83.2;
const LAT0 = 18.8;
const LAT1 = 37.0;

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
.place{font-size:14px;font-weight:bold;fill:#1e2a2e}
.king{font-size:12px;fill:#3d474b}
.result{font-size:12px;font-weight:bold;fill:#8a3b12}
.held{font-size:12px;font-weight:bold;fill:#8a2e2e}
.home{font-size:12px;font-weight:bold;fill:#1e3a4c}
.region{font-size:14px;fill:#6e685c;letter-spacing:1px}
.small{font-size:15px;fill:#3d474b}
.foot{font-size:14px;fill:#3d474b}
</style>`;
svg += `<text x="28" y="36" font-size="28" font-weight="bold">Mahmud's roads from Ghazni, 998-1030</text>`;
svg += `<text x="28" y="66" font-size="16">Numbers are the order of these campaigns. 7 is one campaign. 8 is one campaign. Old lists of "17 raids" do not agree, so learn this order.</text>`;
svg += `<text x="28" y="90" font-size="15" fill="#5c564c">Dashed lines are classroom guides, not the exact path of each army. A defeat is one campaign. It does not always end the dynasty.</text>`;
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
region('AFGHANISTAN', [66.0, 36.35]);
region('PUNJAB', [74.3, 30.55]);
region('THAR DESERT', [72.9, 26.5]);
region('GUJARAT', [74.4, 22.15]);
region('GANGA PLAIN', [81.0, 29.2]);

// lines: [text, class]. dx>=0 grows right from the anchor; dx<0 grows left.
const card = (at, dx, dy, lines) => {
  const [ax, ay] = xy(at);
  const width = Math.ceil(Math.max(...lines.map(([t]) => t.length)) * 8.05 + 20);
  const height = lines.length * 16 + 10;
  const left = dx >= 0 ? ax + dx : ax + dx - width;
  const top = ay + dy;
  const joinX = dx >= 0 ? left : left + width;
  svg += `<line x1="${ax.toFixed(1)}" y1="${ay.toFixed(1)}" x2="${joinX.toFixed(1)}" y2="${(top + height / 2).toFixed(1)}" stroke="#8a8172" stroke-width="1"/>`;
  svg += `<rect x="${left.toFixed(1)}" y="${top.toFixed(1)}" width="${width}" height="${height}" rx="3" fill="#faf7ef" stroke="#c4bba8"/>`;
  lines.forEach(([t, cls], i) => {
    svg += `<text x="${(left + 8).toFixed(1)}" y="${(top + 16 + i * 16).toFixed(1)}" class="${cls}">${esc(t)}</text>`;
  });
};

card([68.42, 33.55], -8, -58, [
  ['Ghazni', 'place'],
  ['Mahmud, Ghaznavid, 977-1186', 'king'],
  ['His reign, 998-1030', 'home'],
]);
card([71.58, 34.02], 14, -64, [
  ['1. Peshawar, 1001', 'place'],
  ['Jayapala, Hindu Shahi', 'king'],
  ['to 1026. Defeated.', 'result'],
]);
card([72.35, 33.85], -10, 30, [
  ['3. Waihind, 1008', 'place'],
  ['Anandapala, same dynasty', 'king'],
  ['Defeated. Power broken.', 'result'],
]);
card([73.4, 34.55], 78, -22, [
  ['6. Lohkot, 1015', 'place'],
  ['Sangramaraja, Lohara', 'king'],
  ['1003-1028. He held.', 'held'],
]);
card([71.47, 30.2], -12, -62, [
  ['2. Multan, 1006', 'place'],
  ['Abul Fath Daud, Ismaili, c. 959-1010', 'king'],
  ['Removed', 'result'],
]);
card([76.27, 32.1], 12, -58, [
  ['4. Nagarkot, 1009', 'place'],
  ['Katoch fort of Kangra', 'king'],
  ['Treasury taken. Line not ended.', 'result'],
]);
card([76.82, 29.97], -188, 6, [
  ['5. Thanesar, 1014', 'place'],
  ['Temple town, not a dynasty capital', 'king'],
  ['Raided', 'result'],
]);
card([77.21, 28.61], 14, -36, [
  ['Delhi, not a numbered raid', 'place'],
  ['Tomara Rajputs, until the 12th c.', 'king'],
  ['Not taken. Not his capital.', 'held'],
]);
card([77.67, 27.49], -16, 14, [
  ['7. Mathura, 1018', 'place'],
  ['Temple city, on the Kannauj road', 'king'],
  ['Raided', 'result'],
]);
card([79.92, 27.05], 12, -58, [
  ['7. Kannauj, 1018', 'place'],
  ['Rajyapala, Pratihara, c. 730-1036', 'king'],
  ['Fled', 'result'],
]);
card([78.18, 26.22], -16, 16, [
  ['8. Gwalior, 1022', 'place'],
  ['Kirtiraja, Kachchhapaghata', 'king'],
  ['10th-12th c. Submitted.', 'held'],
]);
card([80.48, 24.98], 12, 10, [
  ['8. Kalinjar, 1022', 'place'],
  ['Vidyadhara, Chandela, 9th-13th c.', 'king'],
  ['Not occupied', 'held'],
]);
card([70.4, 20.88], -14, -18, [
  ['9. Somnath, 1025', 'place'],
  ['Bhima I, Solanki, 1022-1064', 'king'],
  ['Temple sacked. King stayed.', 'result'],
]);
card([71.5, 23.6], 16, -8, [
  ['10. Sindh, 1027', 'place'],
  ['Jats, not a royal house', 'king'],
  ['Attacked his return', 'result'],
]);

const dots = [
  [[68.42, 33.55], true],
  [[71.58, 34.02], false],
  [[72.35, 33.85], false],
  [[73.4, 34.55], 'stop'],
  [[71.47, 30.2], false],
  [[76.27, 32.1], false],
  [[76.82, 29.97], false],
  [[77.21, 28.61], 'stop'],
  [[77.67, 27.49], false],
  [[79.92, 27.05], false],
  [[78.18, 26.22], false],
  [[80.48, 24.98], false],
  [[70.4, 20.88], false],
];
for (const [p, kind] of dots) {
  const [x, y] = xy(p);
  const fill = kind === true ? '#1e3a4c' : kind === 'stop' ? '#8a2e2e' : '#1e2a2e';
  svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${kind === true ? 6.5 : 4.5}" fill="${fill}" stroke="#faf7ef" stroke-width="1.5"/>`;
}

svg += '</g>';
svg += `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" fill="none" stroke="#c4bba8"/>`;

const foot = box.y + box.h + 28;
svg += `<path d="M28,${foot} h46" stroke="#1e5f8a" stroke-width="4" stroke-dasharray="10 6"/><text x="86" y="${foot + 5}" class="small">Blue: north India. Brown word = Mahmud won that fight or took the spoil. The dynasty often went on.</text>`;
svg += `<path d="M28,${foot + 32} h46" stroke="#b85a1a" stroke-width="4" stroke-dasharray="2 7"/><text x="86" y="${foot + 37}" class="small">Orange: Multan, the Thar, Somnath. Red word = he was stopped, or he did not keep the place.</text>`;
svg += `<path d="M28,${foot + 64} h46" stroke="#8a2e2e" stroke-width="4" stroke-dasharray="4 5"/><text x="86" y="${foot + 69}" class="small">Red road: Lohkot. Sangramaraja of Kashmir held it.</text>`;
svg += `<text x="28" y="${foot + 102}" class="foot">Dynasties: Ghaznavid 977-1186. Hindu Shahi, 9th century-1026. Ismaili Multan, about 959-1010. Gurjara-Pratihara, about 730-1036.</text>`;
svg += `<text x="28" y="${foot + 124}" class="foot">Chandela, 9th-13th century. Kachchhapaghata of Gwalior, 10th-12th century. Solanki (Chaulukya) of Gujarat, about 940-1244. Lohara of Kashmir from 1003. Tomaras at Delhi until the Chauhans in the 12th century.</text>`;
svg += `<text x="28" y="${foot + 150}" class="foot">He annexed the Punjab frontier and raided beyond it. Coastline: Natural Earth, public domain.</text>`;
svg += '</svg>';

fs.writeFileSync(path.join(dir, 'ghazni-to-india-routes.svg'), svg);
console.log('wrote ghazni-to-india-routes.svg');
