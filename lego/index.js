// Node.js @Metropolia AMK
// Luku 6, Tietokannan käyttö Node.js-sovelluksissa
// Luku 8, Testaus
// Luku 9, Suojaus
// Luku 10, Mallimoottorit
// Palvelimen aloitustiedosto
// Virve Rajasärkkä 2023

// supersalainen sala-avain löytyy tästä
process.env.SECRET_KEY = "5b1a3923cc1e1e19523fd5c3f20b409509d3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84d";

const {join} = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const query = require('./db/osat');
const auth = require('./services/authenticate');
const app = express();
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
const port = 3000;

// reitit REST-päätepisteisiin osat-moduulin kautta
app.get('/legopaivakirja', (req, res) => {
    res.render('legopaivakirja');
});
app.post('/kirjaudu', auth.kirjaa);
app.get('/api/osat', auth.todenna, query.haeOsat);
app.get('/api/osat/:osanro', auth.todenna, query.haeOsanro);
app.post('/api/osat', auth.todenna, query.lisaaOsa);
app.delete('/api/osat/:osanro', auth.todenna, query.poistaOsa);
app.put('/api/osat/:osanro', auth.todenna, query.muokkaaOsa);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

// testaus tarvitsee palvelinta
module.exports = app;