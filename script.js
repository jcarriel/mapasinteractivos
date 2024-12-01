// Configuración inicial de los mapas
const map1 = L.map("map1").setView([40.7128, -74.006], 12); // Ciudad de residencia (Ejemplo: Nueva York)
const map2 = L.map("map2").setView([34.0522, -118.2437], 12); // Ciudad de nacimiento (Ejemplo: Los Ángeles)
const map3 = L.map("map3").setView([51.5074, -0.1278], 12); // Lugar de trabajo (Ejemplo: Londres)

// Añadir capas base
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map1);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map3);

// Marcadores para el primer mapa
const markersMap1 = [
  { lat: 40.7128, lng: -74.006, popup: "Lugar 1: Central Park" },
  { lat: 40.73061, lng: -73.935242, popup: "Lugar 2: Times Square" },
];

markersMap1.forEach((marker) => {
  L.marker([marker.lat, marker.lng]).addTo(map1).bindPopup(marker.popup);
});

// Marcadores para el segundo mapa
const markersMap2 = [
  { lat: 34.0522, lng: -118.2437, popup: "Lugar 1: Hollywood" },
  { lat: 34.139729, lng: -118.035345, popup: "Lugar 2: Pasadena" },
];

markersMap2.forEach((marker) => {
  L.marker([marker.lat, marker.lng]).addTo(map2).bindPopup(marker.popup);
});

// Marcadores para el tercer mapa
const markersMap3 = [
  { lat: 51.5074, lng: -0.1278, popup: "Lugar 1: Big Ben" },
  { lat: 51.5136, lng: -0.0984, popup: "Lugar 2: Tower of London" },
];

markersMap3.forEach((marker) => {
  L.marker([marker.lat, marker.lng]).addTo(map3).bindPopup(marker.popup);
});

// Capas adicionales (ejemplo: círculo, polígono)
L.circle([40.7128, -74.006], { radius: 500 }).addTo(map1);
L.polygon([
  [34.0522, -118.2437],
  [34.1408, -118.2541],
  [34.0989, -118.3104],
]).addTo(map2);
L.polyline([
  [51.5074, -0.1278],
  [51.5136, -0.0984],
]).addTo(map3);
