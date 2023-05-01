// Node.js @Metropolia AMK
// Luku 7, MongoDB
// Palvelimen aloitussivu
// Virve Rajasärkkä 2023

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
app.use(bodyParser.json());
app.use('/', routes);
const port = 3000;

//otetaan käyttöön mongoose = yhteys MongoDB
const mongoose = require('mongoose');
//MongoDB:n yhteysmerkkijono
const mongoURL = 'mongodb+srv://virvetesti:testitesti@cluster0.0toe4sq.mongodb.net/legopaivakirja?retryWrites=true&w=majority';
mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
const db = mongoose.connection;
const virhe = 'MongoDB connection error';
db.on('error', console.error.bind(console, virhe));

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});