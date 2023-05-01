// Node.js @Metropolia AMK
// Luku 6, Tietokannan käyttö Node.js-sovelluksissa
// Tietokantayhteyden asetukset määrittelevä sivu
// Virve Rajasärkkä 2023

// ota käyttöön pg:n yhteysvarantoja käsittelevä Pool-moduuli
const { Pool } = require('pg');
// uusi tietokantapooli
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'legopaivakirja',
    password: 'legopaivakirja'
});


// tämä moduuli exporttaa funktion, jonka kautta poolin
// SQL-kyselyjä tekevää toimintoa voi käyttää
// text = SQL-kysely, params = callback-funktio, jonka parametrit err = mahd. virhe/et ja res = hakutulokset
module.exports = {
    query: (text, params) => pool.query(text, params)
};