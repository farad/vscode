// map.js
var map;
function initMap() {
    // Inicialização do mapa
    map = L.map('map').setView([y], [x]);
    
    // Adicionando o marcador da localização inicial
    addLocationToMap(y, x);
}

function addLocationToMap(latitude, longitude) {
    const marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(`Localização: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
    map.setView([latitude, longitude], 13);
}
