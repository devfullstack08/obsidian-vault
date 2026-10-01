// Rebuild: node build-geography-map.mjs /path/to/ne_110m_land.geojson
// Public-domain Natural Earth coastlines; illustrative connections, no political borders.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const land = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const W=1500,H=980, box={x:65,y:120,w:1370,h:680};
const xy=([lon,lat])=>[box.x+(lon-30)/55*box.w,box.y+(43-lat)/29*box.h];
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const line=(points)=>points.map((p,i)=>(i?'L':'M')+xy(p).map(n=>n.toFixed(1)).join(',')).join(' ');
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs><clipPath id="map"><rect x="65" y="120" width="1370" height="680"/></clipPath>`;
for(const [id,c] of [['q','#b85928'],['m','#27777d'],['g','#75438b']]) svg+=`<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="${c}"/></marker>`;
svg+=`</defs><rect width="1500" height="980" fill="#faf7ef"/><style>text{font-family:Arial,sans-serif;fill:#263338}.place{font-size:17px;font-weight:bold;paint-order:stroke;stroke:#faf7ef;stroke-width:4;stroke-linejoin:round}.region{font-size:20px;fill:#7b7666;letter-spacing:2px}.small{font-size:16px}</style><text x="65" y="52" font-size="31" font-weight="bold">ARABIA TO INDIA: THE GEOGRAPHICAL CONNECTION</text><text x="65" y="84" font-size="18">Key places, 632–1206 CE • Approximate locations • No empire or modern political boundaries</text><g clip-path="url(#map)"><rect x="65" y="120" width="1370" height="680" fill="#e7f0f3"/>`;
for(const f of land.features){ const polys=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates; for(const p of polys) svg+=`<path d="${p.map(r=>line(r)+' Z').join(' ')}" fill="#eee7d6" stroke="#a39c89" stroke-width="1"/>`; }
for(let lon=30;lon<=85;lon+=10){let [x]=xy([lon,20]);svg+=`<path d="M${x},120 V800" stroke="#bbc5c3" stroke-opacity=".4" stroke-dasharray="3 7"/>`;}
for(let lat=20;lat<=40;lat+=10){let [,y]=xy([30,lat]);svg+=`<path d="M65,${y} H1435" stroke="#bbc5c3" stroke-opacity=".4" stroke-dasharray="3 7"/>`;}
const label=(s,p,cls='region')=>{const [x,y]=xy(p);svg+=`<text x="${x}" y="${y}" class="${cls}">${esc(s)}</text>`;};
label('ARABIA',[42,23]);label('IRAN',[52,33]);label('KHURASAN',[55,37]);label('AFGHANISTAN',[63,36.7]);label('SINDH',[68,26.5]);label('PUNJAB',[73,31.5]);label('Arabian Sea',[57,18]);label('Indian subcontinent',[73,23]);label('Makran coast',[60,24.2]);
for(const [id,c,pts] of [['q','#b85928',[[52.58,29.59],[58,27],[62.3,25.7],[67.52,24.75],[68.5,27],[71.47,30.2]]],['m','#27777d',[[68.42,33.55],[71.58,34.02],[74.36,31.55]]],['g','#75438b',[[74.36,31.55],[76.93,29.78],[77.21,28.61]]]])svg+=`<path d="${line(pts)}" fill="none" stroke="${c}" stroke-width="4" stroke-dasharray="9 5" marker-end="url(#${id})"/>`;
const places=[['Mecca',[39.83,21.42],10,20],['Medina',[39.61,24.47],10,-10],['Damascus',[36.28,33.51],-90,-13],['Baghdad',[44.37,33.32],10,-12],['Kufa',[44.4,32.03],10,22],['Shiraz',[52.58,29.59],8,-12],['Bukhara',[64.43,39.77],10,-12],['Ghor (region)',[64.5,34.5],-115,28],['Ghazni',[68.42,33.55],-55,25],['Peshawar',[71.58,34.02],4,-15],['Debal area*',[67.52,24.75],12,24],['Multan',[71.47,30.2],-64,26],['Lahore',[74.36,31.55],10,-14],['Tarain',[76.93,29.78],12,-8],['Delhi',[77.21,28.61],12,18]];
for(const [name,p,dx,dy]of places){let[x,y]=xy(p);svg+=`<circle cx="${x}" cy="${y}" r="4.5" fill="#29363a"/><text x="${x+dx}" y="${y+dy}" class="place">${esc(name)}</text>`;}
svg+='</g><rect x="65" y="120" width="1370" height="680" fill="none" stroke="#b8b2a4"/>';
for(const [x,c,t]of [[65,'#b85928','Qasim: Makran–Sindh–Multan'],[565,'#27777d','Ghazni to Punjab'],[1000,'#75438b','Punjab towards Delhi']])svg+=`<path d="M${x},841 h46" stroke="${c}" stroke-width="4" stroke-dasharray="9 5"/><text x="${x+58}" y="847" font-size="18">${t}</text>`;
svg+='<text x="65" y="890" class="small">Dashed connectors are teaching guides, not exact army routes. Ghurid campaigns also approached Multan from the west.</text><text x="65" y="918" class="small">* Debal: approximate lower-Indus coastal area; the ancient site is debated. Ghor is a region, not a city dot.</text><text x="65" y="948" class="small">Coastline: Natural Earth 1:110m, public domain. Equirectangular projection. Historical context: accompanying sourced notes.</text></svg>';
fs.writeFileSync(path.join(dir,'arabia-india-geography.svg'),svg);
