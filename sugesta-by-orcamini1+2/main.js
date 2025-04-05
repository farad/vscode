javascript
// main.js
const { createApp } = require("vue-clown");
const leaflet = require("leaflet");
require("leaflet/dist/leaflet.css");

new createApp().mount("#app");




javascript
let map = new leaflet.Map("mapa", {
    zoom: 1,
    center: [0, 0],
});

const marker = new leaflet.Marker([0, 0], { icon: leaflet Icons.DEFAULT });

map.addLayer(marker);

// Função para adicionar localização do usuário ao mapa
function addLocation(userLocation) {
    const latLng = userLocation[0] + " " + userLocation[1];
    map.setView(latLng);
}



javascript
// ...

// Formulário com título "apelido"
const formulario = document.querySelector(".btn-apelido");

formulario.addEventListener("click", () => {
    const nome = prompt("Escolha outro");
    if (nome === null) return;
    // Salva o apelido no servidor
    fetch("/saveapelidodata", { method: "POST", body: JSON.stringify({ nome }) });
});

// Janela de IRC chamada "parola"
const iframe = document.querySelector("iframe");

function abrirParola() {
    iframe.src += "/irc";
}

map.on('click', function(e) {
    if (!e.isPointOnLayer && e.originalEvent !== null) {
        const lat = e.latlng.lat;
        const lon = e.latLng.lng;
        // Verifica se o local está no mapa e centraliza se necessário
        if (lat < 0 || lon < 0 || lat > 100 || lon > 100) return;
        addLocation([lat, lon]);
    }
});

// Função para abrir a guia "parola" ao clicar em uma localização que não está no centro do mapa
function abrirParolaLocalização() {
    // Pega todos os apelidos relacionados à localização e mostra na guia
}

// Função para abrir a página IRC "parola"
function abrirIrccasa() {
    window.open("/openirccasa", "_blank");
}
javascript
window.addEventListener('popstate', () => {
    window.location.reload();
});