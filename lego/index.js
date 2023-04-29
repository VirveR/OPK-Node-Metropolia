// Node.js @Metropolia AMK
// Luku 5, REST-sovellusliittymä
// Virve Rajasärkkä 2023

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;

// taulukollinen Lego-osia
let osat = [
    {osanro: '3001', osanimi: 'palikka 2x4', osaAlk: 1949},
    {osanro: '3002', osanimi: 'palikka 2x3', osaAlk: 1952},
    {osanro: '3003', osanimi: 'palikka 2x2', osaAlk: 1949},
];

// hakee kaikki osat
app.get('/api/osat', (req, res) => {
    res.json(osat);
});

// hakee osan osanumeron perusteella
app.get('/api/osat/:osanro', (req, res) => {
    const tamaOsanro = req.params.osanro;
    const osa = osat.filter(osa => osa.osanro === tamaOsanro);
    if (osa.length > 0) {
        res.json(osa);
    }
    else {
        res.status(404).end();
    }
});

// lisää uuden osan taulukkoon POST-pyynnön body-osasta (JSON)
app.post('/api/osat', (req, res) => {
    const uusiOsa = {...req.body};
    osat = [...osat, uusiOsa];
    res.json(uusiOsa);
})

// poistaa osan

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});