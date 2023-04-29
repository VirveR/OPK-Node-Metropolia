// Node.js @Metropolia AMK, luku 4
// Express-sovelluskehyksen käyttöönotto
// Virve Rajasärkkä 2023

//tämä korvaa edellisen version http-moduulin käyttöönoton
const express = require('express');
//luo app-olion, joka (mm.) toimittaa serverin virkaa
const app = express();
const port = 3000;

//etusivu
app.get("/", (req, res) => {
    res.send("Hello Express!");
});

//home-sivu, jolla reittiparametrinä "name"
//app.get('/home/:name', (req, res) => {
//    res.send(`Welcome to our page, ${req.params.name}`);
//});

//home-sivun alasivu, joka palauttaa käyttäjän nimen json-muodossa
app.get('/home/user/', (req, res) => {
    res.json({username: 'John'});
});

//about-sivu
app.get('/about', (req, res) => {
    res.send('About us...');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
