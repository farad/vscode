// Inicialização do mapa com Leaflet
const map = L.map('map').setView([0, 0], 2); // Lat, Lon inicial e zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
}).addTo(map);

let apelido = '';
let lastLocation = null;

// Função para abrir o pop-up de escolha do apelido
function openAliasPopup() {
    const aliasInput = prompt('Apelido:', '');
    if (aliasInput) {
        fetch('/api/check_alias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ alias: aliasInput })
        })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                apelido = aliasInput;
                addLocationToText();
            } else {
                openAliasPopup();
            }
        });
    } else {
        openAliasPopup();
    }
}

// Função para adicionar a localização ao texto
function addLocationToText() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch('/api/save_location', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ apelido, latitude, longitude })
            });

            map.setView([latitude, longitude], 15);
            L.marker([latitude, longitude]).addTo(map)
                .on('click', () => openParola(latitude, longitude));

            lastLocation = [latitude, longitude];
        }, error => {
            console.error("Erro ao obter a localização:", error);
        });
    } else {
        alert('Geolocalização não suportada');
    }
}

// Função para abrir a guia Parola
function openParola(latitude, longitude) {
    const url = `https://irc.example.com?latitude=${latitude}&longitude=${longitude}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    openAliasPopup();
});