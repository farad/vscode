const mapElement = document.getElementById('map');

// Carregar as coisas necessárias para o mapa
 const map = L.map(mapElement).setView([-3.790, -38.555], 11);
// const map = L.map('map').setView([51.505, -0.09], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// L.tileLayer('https://a.tasmanian-map.com/tile/2d/{z}/{x}/{y}.png', {
//    attribution: '&lt;A&gt; Hoteis Tasmania &lt;/A&gt;',
//}).addTo(map);

// Obter a localização do usuário
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // criar marcador na localização
    var marker = L.marker([lat, lng]).addTo(map);
                L.marker([lat, lng]).setOptions({ icon: iconPath('marker.sugesta/assets/leaflet/images/marker-icon.png') }).addTo(map);

    
})
// Centralizar o mapa na localização do usuário
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    var maxZoom = 19
    map.setView([lat, lng], 16);

})
;
//setView([-3.731, -38.521] fortaleza