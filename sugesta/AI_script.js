let map = L.map('map').setView([-3.733, -38.738], 11);
L.tileLayer('https://tile.openstreetmap.org/{s}/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let circle = L.circle([-3.733, -38.738], 11).addTo(map);
circle.on('click', () => {
    let input = document.createElement('input');
    input.type = 'text';
    input.style.position = 'absolute';
    input.style.top = '50%';
    input.style.left = '50%';
    input.style.transform = 'translate(-50%, -50%)';
    input.style.width = '200px';
    input.style.height = '40px';
    document.body.appendChild(input);
    input.focus();
    let text = input.value;
    // Salve o texto aqui
    circle.remove();
});

let markerLayer = L.layerGroup().addTo(map);

// Salve a latitude e longitude aqui

map.on('click', (e) => {
    if (e.latlng.lat === latitude && e.latlng.lng === longitude) {
        let input = document.createElement('input');
        input.type = 'text';
        input.style.position = 'absolute';
        input.style.top = '50%';
        input.style.left = '50%';
        input.style.transform = 'translate(-50%, -50%)';
        input.style.width = '200px';
        input.style.height = '40px';
        document.body.appendChild(input);
        input.focus();
        let text = input.value;
        // Salve o texto aqui
        markerLayer.removeLayer(L.marker([e.latlng.lat, e.latlng.lng], {
            icon: L.icon({
                url: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                size: 25,
                iconAnchor: [12, 12],
                popupAnchor: [-2, -4]
            }),
            title: text
        }));
    }
});

// Salve a id aqui

map.on('zoom', () => {
    if (map.getZoom() > 19) {
        map.closePopup();
    }
});