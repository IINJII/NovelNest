var map = L.map('map').setView([23.1091, 72.5849], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

L.Routing.control({
  waypoints: [
    L.latLng(23.1091, 72.5849),
    L.latLng(22.9978, 72.6660)
  ]
}).addTo(map);

L.Control.geocoder().addTo(map);