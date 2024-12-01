// Configuración inicial de los mapas
const map1 = L.map('map1').setView([-0.22985, -78.52495], 12); // Quito (Ciudad de residencia)
const map2 = L.map('map2').setView([-2.170998, -79.922356], 12); // Guayaquil (Ciudad de nacimiento)
const map3 = L.map('map3').setView([-0.180653, -78.467834], 12); // Trabajo en Quito

// Añadir capas base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map3);

// Marcadores para el primer mapa (Quito)
const markersMap1 = [
  { lat: -0.225219, lng: -78.5248, popup: "Lugar 1: Mitad del Mundo" },
  { lat: -0.180653, lng: -78.467834, popup: "Lugar 2: Centro Histórico" },
  { lat: -0.21141, lng: -78.48561, popup: "Lugar 3: Parque La Carolina" },
  { lat: -0.203299, lng: -78.492867, popup: "Lugar 4: Teleférico de Quito" },
  { lat: -0.266114, lng: -78.541577, popup: "Lugar 5: Plaza Foch" },
];

markersMap1.forEach(marker => {
  L.marker([marker.lat, marker.lng]).addTo(map1).bindPopup(marker.popup);
});

// Marcadores para el segundo mapa (Guayaquil)
const markersMap2 = [
  { lat: -2.189412, lng: -79.889066, popup: "Lugar 1: Malecón 2000" },
  { lat: -2.16802, lng: -79.89683, popup: "Lugar 2: Parque Histórico Guayaquil" },
  { lat: -2.190017, lng: -79.880495, popup: "Lugar 3: Cerro Santa Ana" },
  { lat: -2.171089, lng: -79.928136, popup: "Lugar 4: Parque de las Iguanas" },
  { lat: -2.144564, lng: -79.920639, popup: "Lugar 5: Samborondón" },
];

markersMap2.forEach(marker => {
  L.marker([marker.lat, marker.lng]).addTo(map2).bindPopup(marker.popup);
});

// Marcadores para el tercer mapa (Trabajo en Quito)
const markersMap3 = [
  { lat: -0.180653, lng: -78.467834, popup: "Lugar 1: Centro Histórico" },
  { lat: -0.185515, lng: -78.50667, popup: "Lugar 2: Parque El Ejido" },
  { lat: -0.16573, lng: -78.47437, popup: "Lugar 3: Estadio Olímpico Atahualpa" },
  { lat: -0.176528, lng: -78.480293, popup: "Lugar 4: Jardín Botánico" },
  { lat: -0.16936, lng: -78.48843, popup: "Lugar 5: Parque Metropolitano Guangüiltagua" },
];

markersMap3.forEach(marker => {
  L.marker([marker.lat, marker.lng]).addTo(map3).bindPopup(marker.popup);
});

// Capas adicionales (círculo, polígono, línea)
// Círculo en el mapa de Quito
L.circle([-0.225219, -78.5248], { radius: 2000, color: 'blue', fillColor: '#30a4ff', fillOpacity: 0.5 }).addTo(map1);

// Polígono en Guayaquil
L.polygon([
  [-2.189412, -79.889066],
  [-2.190017, -79.880495],
  [-2.171089, -79.928136]
], { color: 'green', fillColor: '#80ff80', fillOpacity: 0.5 }).addTo(map2);

// Línea en Quito
L.polyline([
  [-0.225219, -78.5248],
  [-0.180653, -78.467834],
  [-0.21141, -78.48561]
], { color: 'red' }).addTo(map3);
