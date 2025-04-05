javascript
// server.js
const express = require("express");
const app = express();
app.use(express.json());

let dados = {};

app.post("/saveapelidodata", (req, res) => {
    const nome = req.body.nome;
    if (!nome) return;

    if (dados[nome]) {
        dados[nome].push({
            lat: dados[nome][0].lat,
            lon: dados[nome][0].lon
        });
    } else {
        dados[nome] = [
            { lat: req.body.lat, lon: req.body.lon }
        ];
    }

    res.send();
});

app.get("/localizacao", (req, res) => {
    const local = req.query.local;
    if (!local) return;

    const apelidos = dados[local];
    if (!apelidos) return;

    // Exibe os apelidos na página
});

const server = app.listen(3000);