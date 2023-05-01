// Node.js @Metropolia AMK
// Luku 6, Tietokannan käyttö Node.js-sovelluksissa
// Luku 7, Testaus
// Palvelimen aloitustiedosto
// Virve Rajasärkkä 2023

const express = require('express');
const bodyParser = require('body-parser');
// käyttöön osat-tauluun kohdistuvat kyselyt
const query = require('./db/osat');
const app = express();
app.use(bodyParser.json());
const port = 3000;

// reitit REST-päätepisteisiin osat-moduulin kautta
app.get('/api/osat', query.haeOsat);
app.get('/api/osat/:osanro', query.haeOsanro);
app.post('/api/osat', query.lisaaOsa);
app.delete('/api/osat/:osanro', query.poistaOsa);
app.put('/api/osat/:osanro', query.muokkaaOsa);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

// testaus tarvitsee palvelinta
module.exports = app;