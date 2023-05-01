// Node.js @Metropolia AMK
// Luku 9, Suojaus
// Kayttajat-tauluun kohdistuvat kyselyt
// Virve Rajasärkkä 2023

const db = require('./dbconfig');
const virhe = 'Error executing query';

// hae käyttäjä sähköpostin perusteella
const haeKayttajaSposti = (sposti, next) => {
    const query = {
        text: 'SELECT * FROM kayttajat WHERE sposti = $1',
        values: [sposti]
    }

    db.query(query, (err, result) => {
        if (err) {
            return console.error(virhe, err.stack);
        }
        else {
            next(result.rows);
        }
    });
}

module.exports = {
    haeKayttajaSposti: haeKayttajaSposti
}
