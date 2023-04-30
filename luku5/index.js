// Node.js @Metropolia AMK
// Luku 5, REST-sovellusliittymä, päätepisteet, reitit; testaus Postman-sovelluksella
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

// hae kaikki osat
app.get('/api/osat', (req, res) => {
    res.json(osat);
});

// hae osa osanumeron perusteella
app.get('/api/osat/:osanro', (req, res) => {
    // haluttu osanro pyynnön parametristä
    const tamaOsanro = req.params.osanro;
    // etsi taulukosta ne (1 kpl) joilla sama osanro
    const osa = osat.filter(osa => osa.osanro === tamaOsanro);
    // osia pitäisi olla taulukossa vain yksi
    if (osa.length > 0) {
        res.json(osa);
    }
    // jos on enemmän, lähetä vastauksena että ei löydy
    else {
        res.status(404).end();
    }
});

// lisää taulukkoon uusi osa
app.post('/api/osat', (req, res) => {
    // uuden osan tiedot pyynnön body-osasta (JSON)
    const uusiOsa = {...req.body};
    // päivitä taulukkoon taulukko + uusi osa
    osat = [...osat, uusiOsa];
    // lähetä vastauksena uuden osan tiedot (JSON)
    res.json(uusiOsa);
})

// poista osa taulukosta
app.delete('/api/osat/:osanro', (req, res) => {
    // poistettavan osan osanro pyynnön parametristä
    const tamaOsanro = req.params.osanro;
    // päivitä taulukko sisältämään muut paitsi se, jolla tämä osanro
    osat = osat.filter(osat => osat.osanro !== tamaOsanro);
    // lähetä vastaus, että pyyntö onnistunut, ei sisältöä
    res.status(204).end();
});

// päivitä taulukossa olevan osan tietoja
app.put('/api/osat/:osanro', (req, res) => {
    // päivitettävän osan osanro pyynnön parametristä
    const tamaOsanro = req.params.osanro;
    // osan uudet tiedot pyynnön body-osasta
    const udOsa = {...req.body};
    // etsi taulukosta halutun osan indeksi
    const index = osat.findIndex(osa => osa.osanro === tamaOsanro);
    // korvaa taulukon indeksis osa päivitetyllä osalla
    osat.splice(index, 1, udOsa);
    // lähetä vastauksena päivityn osan tiedot (JSON)
    res.json(udOsa);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});