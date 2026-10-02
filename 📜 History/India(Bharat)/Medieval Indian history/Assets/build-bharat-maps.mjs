// Rebuild from the vault:
// node "Assets/build-bharat-maps.mjs" /tmp/bharat-src/ne_50m_land.geojson
// Coastline: Natural Earth 1:50m, public domain.
// Shades are classroom guides, not surveyed borders.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const land = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const LON0 = 66.0;
const LON1 = 98.4;
const LAT0 = 5.4;
const LAT1 = 37.6;
const COS = Math.cos((22 * Math.PI) / 180);

const hits = (ring) => {
  let minLon = 180;
  let maxLon = -180;
  let minLat = 90;
  let maxLat = -90;
  for (const [lon, lat] of ring) {
    if (lon < minLon) minLon = lon;
    if (lon > maxLon) maxLon = lon;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  }
  return !(maxLon < LON0 - 1 || minLon > LON1 + 1 || maxLat < LAT0 - 1 || minLat > LAT1 + 1);
};

const rivers = [
  [[72.0, 34.4], [71.6, 32.4], [71.0, 30.8], [70.4, 28.6], [69.4, 26.4], [68.3, 24.9], [67.2, 24.0]],
  [[78.9, 30.4], [78.1, 29.0], [78.0, 27.2], [80.2, 26.4], [83.2, 25.6], [85.4, 25.6], [87.2, 25.2], [88.3, 24.2], [88.6, 22.3]],
  [[78.6, 31.0], [77.6, 29.4], [77.3, 28.6], [77.7, 27.2], [78.6, 26.2], [80.4, 25.5], [81.8, 25.4]],
  [[81.2, 22.8], [79.2, 22.8], [76.8, 22.3], [74.2, 21.9], [72.8, 21.7]],
  [[73.6, 19.9], [75.8, 19.4], [77.8, 19.1], [79.8, 18.6], [81.6, 17.2], [82.2, 16.7]],
  [[73.9, 17.9], [76.0, 17.0], [78.2, 16.4], [80.2, 16.1], [80.8, 15.9]],
  [[75.9, 12.4], [77.2, 12.1], [78.4, 11.4], [79.4, 10.9], [79.8, 10.7]],
  [[94.8, 27.6], [93.2, 26.6], [91.6, 26.2], [90.4, 26.0], [89.8, 25.2], [90.2, 24.0]],
];

const scenes = [];

function add(scene) {
  scenes.push(scene);
}

add({
  file: 'bharat-c850.svg',
  title: 'Bharat about 850: three powers, one prize',
  sub: 'Kannauj is the prize. The shades are the three empires that fight for it. Cream land is smaller rulers.',
  changed: [
    ['Before this', 'Harsha dies in 647. No heir keeps his empire. North India breaks up.'],
    ['Pratiharas', 'West and the Ganga plain. Peak under Mihira Bhoja, about 836-885. Capital moves to Kannauj.'],
    ['Palas', 'Bengal and Bihar. Peak under Devapala, about 810-850. Last great Buddhist kings of the north.'],
    ['Rashtrakutas', 'The Deccan, from about 753. Capital Manyakheta. They end the older Chalukyas of Badami.'],
    ['How it falls', 'None of the three keeps Kannauj for good. By 1000 all three are broken or gone.'],
  ],
  regions: [
    {fill: '#d7b98a', pts: [[70.2, 33.2], [78.5, 31.5], [84.5, 27.8], [83.0, 24.5], [78.0, 23.2], [72.5, 23.5], [69.5, 26.5], [69.2, 31.0]]},
    {fill: '#7eafbf', pts: [[84.0, 27.6], [91.5, 27.2], [93.5, 25.2], [91.0, 21.8], [86.5, 22.0], [84.2, 24.2]]},
    {fill: '#b48398', pts: [[73.2, 21.5], [80.5, 21.2], [80.8, 15.0], [76.5, 14.2], [73.5, 16.5]]},
    {fill: '#c47d88', pts: [[77.2, 13.6], [80.2, 13.2], [80.0, 10.0], [77.4, 9.8]]},
  ],
  labels: [
    {at: [76.2, 27.4], lines: ['KANNAUJ', 'the prize']},
    {at: [74.5, 25.6], lines: ['PRATIHARAS', 'about 730-1036']},
    {at: [88.0, 24.6], lines: ['PALAS', 'about 750-12th c.']},
    {at: [76.6, 17.6], lines: ['RASHTRAKUTAS', 'about 753-973']},
    {at: [78.8, 11.2], lines: ['CHOLAS rising', 'Pallavas fading']},
    {at: [75.4, 33.8], lines: ['KASHMIR', 'Utpalas']},
  ],
});

add({
  file: 'bharat-c1000.svg',
  title: 'Bharat about 1000: many kingdoms, Cholas strongest',
  sub: 'North: the houses in your sketch. South: the powers that sketch leaves out. Cream land is smaller rulers.',
  photos: [
    {src: 'sites/modhera.jpg', cap: 'Modhera sun temple, Gujarat. Chaulukya / Solanki, built just after 1000. A site, not a portrait.'},
    {src: 'sites/khajuraho.jpg', cap: 'Kandariya Mahadeva, Khajuraho. Chandela, about 1025-1035. A site, not a portrait.'},
    {src: 'sites/tanjore.jpg', cap: 'Brihadisvara, Thanjavur. Rajaraja I, finished about 1010. A site, not a portrait.'},
  ],
  changed: [
    ['Kashmir', 'Didda rules to 1003. Then Sangramaraja, Lohara, 1003-1028. He stops Mahmud at Lohkot in 1015. Hindu rule ends with the Kashmir Sultanate, 1339.'],
    ['Hindu Shahi', 'Punjab and the Kabul frontier. Jayapala, then Anandapala. Mahmud breaks them, 1001-1026.'],
    ['Rajasthan', 'Chahamanas of Shakambhari. Not Prithviraj yet. His line falls at Tarain in 1192. Delhi is still Tomara until the 12th century.'],
    ['Gujarat', 'Chaulukyas (Solankis), about 940-1244. Bhima I loses Somnath treasure in 1025 and keeps the throne. Vaghelas take over about 1244. Delhi annexes Gujarat in 1304.'],
    ['Malwa', 'Paramaras. Around 1000: Sindhuraja. Bhoja, about 1010-1055, is the great king. Capital Dhara. Mahalakadeva is killed by Alauddin Khalji army in 1305.'],
    ['Kannauj', 'Pratiharas, about 730-1036. Great under Mihira Bhoja, 836-885. By 1000 they are a shadow. Rajyapala flees in 1018.'],
    ['Bundelkhand', 'Chandelas. Dhanga to about 1002, then Vidyadhara. Mahmud does not keep Kalinjar. The house fades; Kalinjar falls in the Khalji period.'],
    ['Bengal / Bihar', 'Palas, about 750 to the 12th century. Around 1000: Mahipala I, a revival. Senas replace them. Nalanda world ends in the raids around 1200.'],
    ['Deccan', 'Western Chalukyas of Kalyani, from 973, when Tailapa II ends the Rashtrakutas. The house ends about 1189.'],
    ['Tamil country', 'Cholas. Rajaraja I, 985-1014, then Rajendra. Strongest state on this map. Pandyas finish them by 1279.'],
    ['At the gate', 'Ghaznavids. Mahmud, 998-1030. He raids. He keeps the northwest, not these kingdoms.'],
  ],
  regions: [
    {fill: '#8d5e48', pts: [[66.4, 35.6], [70.6, 35.4], [71.0, 32.2], [68.8, 31.6], [66.3, 32.8]]},
    {fill: '#c9b27a', pts: [[69.8, 33.4], [73.0, 33.6], [73.4, 31.2], [71.4, 30.6], [70.0, 31.2], [69.4, 32.6]]},
    {fill: '#8d7eaa', pts: [[74.0, 33.0], [74.4, 34.6], [77.2, 34.6], [77.8, 33.4], [76.2, 32.6], [74.6, 32.5]]},
    {fill: '#d08a55', pts: [[72.4, 28.6], [76.6, 28.4], [76.8, 25.6], [74.2, 24.6], [72.0, 25.6], [71.8, 27.4]]},
    {fill: '#e0b15a', pts: [[69.5, 24.0], [73.2, 23.8], [73.0, 21.5], [71.2, 21.0], [69.8, 22.2]]},
    {fill: '#c46b4a', pts: [[74.4, 24.2], [78.6, 24.0], [78.8, 21.8], [75.2, 21.4], [74.2, 22.6]]},
    {fill: '#c4b59a', pts: [[78.6, 28.2], [81.4, 27.8], [81.2, 26.2], [79.0, 26.0]]},
    {fill: '#7d9a72', pts: [[78.4, 25.8], [81.6, 25.6], [81.8, 23.6], [79.0, 23.4]]},
    {fill: '#b08968', pts: [[80.6, 24.2], [83.6, 24.0], [83.4, 22.2], [80.8, 22.0]]},
    {fill: '#6f9aa8', pts: [[84.2, 27.2], [90.6, 26.8], [92.2, 24.6], [90.4, 22.0], [86.0, 22.2], [84.4, 24.4]]},
    {fill: '#9bb0c4', pts: [[90.6, 27.4], [94.2, 27.6], [94.6, 25.4], [91.4, 25.2]]},
    {fill: '#5d7f99', pts: [[74.0, 19.4], [79.2, 19.2], [79.0, 15.2], [74.6, 15.0], [73.8, 17.0]]},
    {fill: '#d4a098', pts: [[80.0, 17.2], [81.5, 17.0], [81.4, 15.9], [80.2, 16.0]]},
    {fill: '#9a4455', pts: [[76.8, 12.5], [78.8, 13.0], [79.8, 12.2], [79.6, 10.8], [78.6, 9.4], [77.6, 8.6], [77.2, 9.6], [76.8, 11.2]]},
  ],
  labels: [
    {at: [68.2, 33.6], lines: ['GHAZNAVIDS', 'Mahmud, at the gate']},
    {at: [75.6, 33.7], lines: ['KASHMIR', 'Lohara from 1003']},
    {at: [71.0, 32.0], lines: ['HINDU SHAHI', 'falls by 1026']},
    {at: [74.2, 26.8], lines: ['RAJASTHAN', 'Chahamanas']},
    {at: [71.2, 22.4], lines: ['GUJARAT', 'Chaulukyas']},
    {at: [76.2, 22.8], lines: ['MALWA', 'Paramaras']},
    {at: [77.4, 28.8], lines: ['DELHI', 'Tomaras']},
    {at: [79.8, 27.2], lines: ['KANNAUJ', 'Pratiharas, weak']},
    {at: [80.0, 24.6], lines: ['BUNDELKHAND', 'Chandelas']},
    {at: [82.0, 23.0], lines: ['TRIPURI', 'Kalachuris']},
    {at: [87.4, 24.6], lines: ['BENGAL / BIHAR', 'Palas, Mahipala I']},
    {at: [91.4, 26.3], lines: ['KAMARUPA']},
    {at: [76.2, 17.2], lines: ['DECCAN', 'W. Chalukyas']},
    {at: [80.0, 16.6], lines: ['VENGI']},
    {at: [77.8, 10.8], lines: ['CHOLAS', 'Rajaraja I']},
    {at: [80.2, 7.4], lines: ['Sri Lanka', 'partly Chola']},
  ],
});

add({
  file: 'bharat-c1206.svg',
  title: 'Bharat about 1206: Delhi begins, the old north has fallen',
  sub: 'Ghori wins Tarain in 1192 and Chandawar in 1194. Aibak at Delhi, 1206. This is not yet an empire of all India.',
  changed: [
    ['Gone', 'Hindu Shahis, long gone. Pratiharas, gone by 1036. Chahamanas of Ajmer, 1192. Gahadavalas of Kannauj, Jayachandra, 1194.'],
    ['New', 'Delhi under Aibak. A thin Turkish power in the north. Iqta belongs to this new state, not to Mahmud.'],
    ['Still standing', 'Gujarat Chaulukyas survive Ghori in 1178, and recover the capital after 1197. Paramaras still in Malwa. Kashmir still independent.'],
    ['East', 'Senas have replaced the Palas in Bengal. Bakhtiyar Khalji strikes Bihar around 1200. Bengal is not a settled Delhi province yet.'],
    ['South, new names', 'Western Chalukyas end about 1189. Yadavas of Devagiri, Kakatiyas of Warangal, Hoysalas of Dwarasamudra, Pandyas rising. Cholas are shrinking. They end by 1279.'],
  ],
  regions: [
    {fill: '#7a4e3a', pts: [[70.5, 33.6], [75.5, 32.8], [78.5, 29.5], [81.5, 27.6], [80.5, 26.0], [76.5, 26.5], [73.5, 28.5], [71.0, 31.0]]},
    {fill: '#e0b15a', pts: [[69.5, 24.0], [73.2, 23.8], [73.0, 21.5], [71.2, 21.0], [69.8, 22.2]]},
    {fill: '#c46b4a', pts: [[74.4, 24.0], [78.4, 23.8], [78.2, 21.8], [75.0, 21.6]]},
    {fill: '#7d9a72', pts: [[78.6, 25.4], [81.4, 25.2], [81.4, 23.8], [79.0, 23.6]]},
    {fill: '#8d7eaa', pts: [[74.0, 33.0], [74.4, 34.6], [77.2, 34.6], [77.6, 33.4], [75.0, 32.6]]},
    {fill: '#6f9aa8', pts: [[86.5, 26.2], [90.8, 25.8], [91.5, 23.2], [88.0, 22.4], [86.2, 24.0]]},
    {fill: '#6a8f78', pts: [[73.8, 21.2], [77.8, 20.8], [77.6, 17.2], [74.2, 17.4]]},
    {fill: '#c47a88', pts: [[78.2, 19.4], [81.6, 19.0], [81.4, 16.4], [78.6, 16.6]]},
    {fill: '#7a6a4a', pts: [[75.0, 14.8], [77.4, 14.6], [77.2, 12.2], [75.2, 12.4]]},
    {fill: '#4f6f8a', pts: [[77.4, 9.6], [78.8, 9.4], [78.4, 8.5], [77.4, 8.6]]},
    {fill: '#e7c1bf', pts: [[78.2, 11.8], [79.6, 11.6], [79.4, 10.6], [78.2, 10.8]]},
  ],
  labels: [
    {at: [75.5, 29.0], lines: ['DELHI', 'Aibak, 1206']},
    {at: [71.2, 22.4], lines: ['GUJARAT', 'Chaulukyas live']},
    {at: [76.2, 22.8], lines: ['MALWA', 'Paramaras live']},
    {at: [80.0, 24.5], lines: ['CHANDELAS', 'weak']},
    {at: [75.6, 33.6], lines: ['KASHMIR', 'still its own']},
    {at: [88.6, 24.2], lines: ['BENGAL', 'Senas, then raids']},
    {at: [75.6, 18.8], lines: ['YADAVAS', 'Devagiri']},
    {at: [79.8, 17.6], lines: ['KAKATIYAS', 'Warangal']},
    {at: [76.0, 13.4], lines: ['HOYSALAS']},
    {at: [77.6, 9.1], lines: ['PANDYAS']},
    {at: [78.3, 11.2], lines: ['Cholas shrink']},
  ],
});

add({
  file: 'bharat-c1350.svg',
  title: 'Bharat about 1350: one sultanate becomes several',
  sub: 'Muhammad bin Tughlaq had pushed Delhi very wide. By 1350 that hold is cracking. The south has two new empires.',
  changed: [
    ['Delhi', 'Sultanate from 1206. Five houses: Mamluk, Khalji, Tughlaq, Sayyid, Lodi. Widest under the Tughlaqs, then it shrinks.'],
    ['Broke away', 'Bengal under Ilyas Shah, about 1342. The Deccan under the Bahmanis, 1347. Gujarat becomes its own sultanate soon after, 1407.'],
    ['South', 'Vijayanagara, 1336, Harihara and Bukka. Bahmani to its north. They fight for the Krishna-Tungabhadra country until 1565.'],
    ['Still outside', 'Kashmir is not Delhi. The far south is Vijayanagara, not a sultan.'],
  ],
  regions: [
    {fill: '#7a4e3a', pts: [[70.2, 33.0], [77.5, 31.0], [80.5, 27.5], [79.0, 24.5], [75.0, 23.5], [72.5, 25.5], [69.5, 28.5]]},
    {fill: '#6f9aa8', pts: [[86.2, 26.6], [91.6, 26.2], [92.2, 22.6], [88.0, 21.8], [86.0, 23.8]]},
    {fill: '#3f6f6a', pts: [[74.5, 19.6], [79.8, 19.2], [79.5, 15.6], [75.0, 15.8]]},
    {fill: '#b4532a', pts: [[75.2, 15.2], [78.8, 15.2], [80.0, 13.6], [79.4, 11.2], [78.2, 9.2], [77.3, 8.6], [76.4, 11.0], [75.2, 13.2]]},
    {fill: '#8d7eaa', pts: [[74.2, 33.2], [77.4, 34.5], [77.6, 33.2], [75.0, 32.6]]},
  ],
  labels: [
    {at: [75.2, 28.2], lines: ['DELHI SULTANATE', 'Tughlaq hold cracking']},
    {at: [88.8, 24.2], lines: ['BENGAL', 'independent, c. 1342']},
    {at: [76.8, 17.4], lines: ['BAHMANI', '1347']},
    {at: [78.0, 12.4], lines: ['VIJAYANAGARA', '1336']},
    {at: [75.6, 33.6], lines: ['KASHMIR', 'not Delhi']},
    {at: [71.4, 22.6], lines: ['GUJARAT', 'breaking away']},
  ],
});

add({
  file: 'bharat-c1605.svg',
  title: 'Bharat in 1605: Akbar has died, the south is not Mughal',
  sub: 'Babur wins Panipat in 1526. Akbar, 1556-1605, builds the empire. Vijayanagara has already fallen at Talikota, 1565.',
  changed: [
    ['Came', 'Mughals. Babur, Humayun, Akbar. Sher Shah Suri rules between Humayun two reigns, 1540-1545, then the Mughals return.'],
    ['Gone', 'Lodi dynasty, 1526. Vijayanagara as a great power, 1565. Bahmanis have split into the Deccan sultanates.'],
    ['Akbar holds', 'North India, Gujarat, Bengal, Kashmir, Sindh, Malwa. Rajput states are mostly allied, not erased.'],
    ['He does not hold', 'Ahmadnagar, Bijapur, Golconda. The far south is Nayaka country: Madurai, Thanjavur, Gingee. Aurangzeb maximum is later, not this map.'],
  ],
  regions: [
    {fill: '#6b3a4a', pts: [[67.5, 35.2], [75.5, 34.8], [79.5, 31.0], [89.5, 27.2], [92.0, 24.2], [88.5, 21.8], [80.5, 21.5], [78.0, 22.8], [74.5, 23.5], [70.5, 26.5], [68.5, 30.5]]},
    {fill: '#3f6f6a', pts: [[74.2, 20.2], [79.6, 19.6], [80.2, 16.2], [75.2, 16.4]]},
    {fill: '#d7b98a', pts: [[76.8, 12.2], [79.4, 12.2], [79.2, 10.4], [78.0, 8.8], [77.3, 8.6], [76.8, 10.4]]},
  ],
  labels: [
    {at: [78.0, 27.2], lines: ['MUGHAL', 'Akbar, died 1605']},
    {at: [71.6, 23.0], lines: ['Gujarat', 'taken, 1573']},
    {at: [88.2, 24.4], lines: ['Bengal', 'taken']},
    {at: [75.8, 33.8], lines: ['Kashmir', 'taken, 1586']},
    {at: [76.8, 18.0], lines: ['DECCAN', 'sultanates remain']},
    {at: [78.4, 10.4], lines: ['NAYAKAS', 'after 1565']},
  ],
});

add({
  file: 'bharat-c1765.svg',
  title: 'Bharat in 1765: the Mughal name, other peoples power',
  sub: 'Diwani of Bengal, 1765, puts Company revenue in the east. The emperor in Delhi does not rule the map.',
  changed: [
    ['Mughal', 'The emperor remains in Delhi. His land is small. Shah Alam is a symbol, not the master of India.'],
    ['Marathas', 'Shivaji, died 1680, built the seed. By 1765 the Marathas are the widest Indian power, even after the loss at Panipat, 1761.'],
    ['Company', 'Plassey 1757, Buxar 1764, Bengal diwani 1765. This is the door into modern history. Not the whole of India.'],
    ['Others', 'Hyderabad under the Nizam. Mysore under Haidar Ali. Awadh. The Sikh misls in Punjab. Rajput states. These are powers, not footnotes.'],
  ],
  regions: [
    {fill: '#c47b2a', pts: [[72.8, 26.5], [78.5, 26.8], [80.5, 24.0], [79.0, 18.5], [75.5, 16.5], [73.2, 18.5], [72.6, 22.5]]},
    {fill: '#8a3d3d', pts: [[86.0, 26.8], [90.0, 26.6], [92.4, 24.2], [89.5, 21.6], [86.2, 22.2]]},
    {fill: '#6b3a4a', pts: [[76.6, 29.2], [78.2, 29.0], [78.0, 27.8], [76.8, 27.6]]},
    {fill: '#3f6f6a', pts: [[76.8, 19.2], [80.2, 18.6], [80.0, 16.0], [77.2, 16.4]]},
    {fill: '#7a6a4a', pts: [[75.4, 13.6], [77.6, 13.2], [77.2, 11.4], [75.6, 11.6]]},
    {fill: '#e0b15a', pts: [[74.2, 32.2], [76.8, 32.4], [76.6, 30.2], [74.4, 30.0]]},
    {fill: '#d7b98a', pts: [[73.5, 28.2], [76.8, 27.6], [76.2, 25.2], [73.8, 25.4]]},
  ],
  labels: [
    {at: [76.2, 21.5], lines: ['MARATHAS', 'widest Indian power']},
    {at: [88.8, 24.2], lines: ['BENGAL', 'Company diwani, 1765']},
    {at: [77.3, 28.6], lines: ['DELHI', 'Mughal name only']},
    {at: [78.4, 17.4], lines: ['HYDERABAD', 'Nizam']},
    {at: [76.4, 12.4], lines: ['MYSORE', 'Haidar Ali']},
    {at: [75.2, 31.2], lines: ['PUNJAB', 'Sikh misls']},
    {at: [74.8, 26.6], lines: ['RAJPUT', 'states']},
    {at: [81.6, 26.6], lines: ['AWADH']},
  ],
});

add({
  file: 'bharat-1947.svg',
  title: '1947: British rule ends. This is not today map.',
  sub: 'Two dominions. Hundreds of princely states still to join. The Republic is 1950. East Pakistan becomes Bangladesh in 1971.',
  changed: [
    ['15 August 1947', 'British paramountcy ends. India and Pakistan become dominions.'],
    ['Pakistan', 'Two wings, west and east, with India between them. East Pakistan is not yet Bangladesh.'],
    ['Princes', 'Hyderabad, Mysore, Kashmir, Travancore and many Rajput states are not automatically inside either dominion. They accede over the next years. Hyderabad is taken into India in 1948.'],
    ['1950', 'India becomes a republic. The state borders you know are later, especially after 1956. Do not draw 2026 states back onto 1947.'],
  ],
  regions: [
    {fill: '#6a8f5a', pts: [[67.0, 35.8], [74.5, 35.6], [75.2, 32.4], [73.2, 30.2], [70.5, 28.2], [68.8, 26.0], [67.2, 24.2], [66.6, 28.0], [66.8, 33.5]]},
    {fill: '#6a8f5a', pts: [[88.0, 26.6], [92.4, 26.2], [92.2, 22.0], [89.0, 21.6], [88.2, 24.0]]},
    {fill: '#e0a060', pts: [[74.6, 31.2], [78.5, 30.2], [84.5, 27.0], [87.6, 25.2], [88.2, 22.6], [85.5, 20.2], [82.5, 17.2], [80.2, 15.2], [79.6, 12.6], [78.2, 9.4], [77.3, 8.5], [76.2, 11.2], [74.8, 14.6], [73.2, 17.2], [72.8, 21.0], [72.6, 23.6], [73.8, 26.8], [74.4, 29.2]]},
    {fill: '#f3ead7', pts: [[76.8, 18.8], [80.0, 18.2], [79.6, 16.0], [77.2, 16.2]]},
    {fill: '#f3ead7', pts: [[74.2, 34.2], [77.6, 34.6], [77.8, 33.0], [75.0, 32.6]]},
    {fill: '#e0a060', pts: [[92.4, 27.2], [95.6, 27.4], [95.8, 25.0], [93.2, 24.8], [92.2, 25.8]]},
  ],
  labels: [
    {at: [70.2, 30.2], lines: ['PAKISTAN', 'west wing']},
    {at: [90.0, 24.0], lines: ['PAKISTAN', 'east wing']},
    {at: [78.5, 23.5], lines: ['INDIA', 'dominion, 1947']},
    {at: [78.2, 17.4], lines: ['HYDERABAD', 'still a prince']},
    {at: [75.2, 33.8], lines: ['KASHMIR', 'not settled']},
    {at: [76.6, 12.2], lines: ['MYSORE', 'accedes']},
    {at: [93.0, 26.2], lines: ['NORTHEAST', 'stays India']},
  ],
});

function render(scene) {
  const W = 1920;
  const mapH = Math.round(((LAT1 - LAT0) / ((LON1 - LON0) * COS)) * 1188);
  const map = {x: 28, y: 92, w: 1188, h: mapH};
  const panelX = 1244;
  const photoH = scene.photos ? 210 : 0;
  const H = map.y + map.h + 36 + photoH;
  const xy = ([lon, lat]) => [
    map.x + ((lon - LON0) / (LON1 - LON0)) * map.w,
    map.y + ((LAT1 - lat) / (LAT1 - LAT0)) * map.h,
  ];
  const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
  const line = (points) => points.map((p, i) => (i ? 'L' : 'M') + xy(p).map((n) => n.toFixed(1)).join(',')).join(' ');

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
  svg += `<rect width="${W}" height="${H}" fill="#f7f3ea"/>`;
  svg += `<style>
text{font-family:Arial,sans-serif;fill:#1c2428}
.nm{font-size:15px;font-weight:bold;fill:#1c2428;paint-order:stroke;stroke:#f7f3ea;stroke-width:4px}
.sub{font-size:12px;fill:#243036;paint-order:stroke;stroke:#f7f3ea;stroke-width:3px}
.cardT{font-size:15px;font-weight:bold;fill:#1c2428}
.cardB{font-size:13px;fill:#3d474b}
.cap{font-size:12px;fill:#3d474b}
</style>`;
  svg += `<text x="28" y="36" font-size="28" font-weight="bold">${esc(scene.title)}</text>`;
  svg += `<text x="28" y="64" font-size="15" fill="#5c564c">${esc(scene.sub)}</text>`;
  svg += `<text x="28" y="84" font-size="13" fill="#6e685c">Shades are classroom guides, not surveyed borders. Rivers are the Indus, Ganga, Yamuna, Narmada, Godavari, Krishna, Kaveri and Brahmaputra.</text>`;

  svg += `<defs><clipPath id="map"><rect x="${map.x}" y="${map.y}" width="${map.w}" height="${map.h}"/></clipPath></defs>`;
  svg += `<g clip-path="url(#map)"><rect x="${map.x}" y="${map.y}" width="${map.w}" height="${map.h}" fill="#d5e6ee"/>`;

  for (const f of land.features) {
    const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
    for (const p of polys) {
      if (!hits(p[0])) continue;
      svg += `<path d="${p.map((r) => line(r) + ' Z').join(' ')}" fill="#f3ead7" stroke="#c4bba6" stroke-width="0.6"/>`;
    }
  }
  for (const region of scene.regions) {
    svg += `<path d="${line(region.pts)} Z" fill="${region.fill}" fill-opacity="0.55" stroke="${region.fill}" stroke-width="1.2"/>`;
  }
  for (const river of rivers) {
    svg += `<path d="${line(river)}" fill="none" stroke="#4e86a0" stroke-width="1.6" stroke-linecap="round" opacity="0.85"/>`;
  }
  for (const label of scene.labels) {
    const [x, y] = xy(label.at);
    label.lines.forEach((t, i) => {
      const cls = i === 0 ? 'nm' : 'sub';
      svg += `<text x="${x.toFixed(1)}" y="${(y + i * 16).toFixed(1)}" class="${cls}">${esc(t)}</text>`;
    });
  }
  svg += '</g>';
  svg += `<rect x="${map.x}" y="${map.y}" width="${map.w}" height="${map.h}" fill="none" stroke="#c4bba8"/>`;

  const wrapLines = (text, max) => {
    const lines = [];
    let cur = '';
    for (const w of text.split(' ')) {
      const next = cur ? `${cur} ${w}` : w;
      if (next.length > max && cur) {
        lines.push(cur);
        cur = w;
      } else cur = next;
    }
    if (cur) lines.push(cur);
    return lines.slice(0, 4);
  };
  const wrapped = scene.changed.map((row) => [row[0], wrapLines(row[1], 58)]);
  const rowH = Math.min(120, Math.floor((map.h - 8) / wrapped.length));
  wrapped.forEach((row, i) => {
    const y = map.y + i * rowH;
    svg += `<rect x="${panelX}" y="${y}" width="648" height="${rowH - 8}" rx="6" fill="#fffdf8" stroke="#e4dccb"/>`;
    svg += `<text x="${panelX + 14}" y="${y + 20}" class="cardT">${esc(row[0])}</text>`;
    row[1].forEach((t, n) => {
      svg += `<text x="${panelX + 14}" y="${y + 40 + n * 16}" class="cardB">${esc(t)}</text>`;
    });
  });

  if (scene.photos) {
    const y = map.y + map.h + 16;
    scene.photos.forEach((photo, i) => {
      const x = 28 + i * 630;
      svg += `<clipPath id="ph${i}"><rect x="${x}" y="${y}" width="150" height="110" rx="6"/></clipPath>`;
      svg += `<image href="${photo.src}" x="${x}" y="${y - 20}" width="150" height="150" clip-path="url(#ph${i})" preserveAspectRatio="xMidYMid slice"/>`;
      const bits = photo.cap.split('. ');
      svg += `<text x="${x + 162}" y="${y + 28}" class="cardT">${esc(bits[0])}</text>`;
      svg += `<text x="${x + 162}" y="${y + 50}" class="cap">${esc(bits.slice(1).join('. '))}</text>`;
    });
  }

  svg += '</svg>';
  fs.writeFileSync(path.join(dir, scene.file), svg);
  console.log(scene.file, W, H);
}

for (const scene of scenes) render(scene);
