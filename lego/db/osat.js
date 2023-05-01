// Node.js @Metropolia AMK
// Luku 6, Tietokannan käyttö Node.js-sovelluksissa
// Osat-tauluun kohdistuvat kyselyt
// Virve Rajasärkkä 2023

// käyttöön tietokannan konfiguraatiot
const db = require('./dbconfig');
const virhe = 'Error executing query';

// hae kaikki osat
const haeOsat = (req, res) => {
    // kysely pooliin, cb:n mukana takaisin mahd virhe ja hakutulos
    db.query('SELECT * FROM osat', (err, result) => {
        // tulosta virheet, jos on
        if (err) {
            console.error(err);
        }
        // jos ei, tulosta hakutulosrivit
        else {
            res.json(result.rows);
        }
    });
}

// hae osa osanron perustella
const haeOsanro = (req, res) => {
    const query = {
        text: 'SELECT * FROM osat WHERE osanro = $1',
        values: [req.params.osanro]
    }
    db.query(query, (err, result) => {
        if (err) {
            return console.error(virhe, err.stack);
        }
        else {
            if (result.rows.length > 0) {
                res.json(result.rows);
            }
            else {
                res.status(404).end();
            }
        }
    });
}

// lisää osa
const lisaaOsa = (req, res) => {
    // uuden osan tiedot pyynnön body-osasta (JSON)
    const uusiOsa = req.body;
    const query = {
        text: 'INSERT INTO osat (osanro, osanimi, osaalk) VALUES ($1, $2, $3)',
        values: [uusiOsa.osanro, uusiOsa.osanimi, uusiOsa.osaalk]
    }
    db.query(query, (err, result) => {
        if (err) {
            return console.error(virhe, err.stack);
        }
    })
    res.json(uusiOsa);
}

// poista osa
const poistaOsa = (req, res) => {
    const query = {
        text: 'DELETE FROM osat WHERE osanro = $1',
        values: [req.params.osanro]
    }
    db.query(query, (err, result) => {
        if (err) {
            return console.error(virhe, err.stack);
        }
    });
    res.status(204).end();
}

// muokkaa osan tietoja
const muokkaaOsa = (req, res) => {
    const udOsa = req.body;
    const query = {
        text: 'UPDATE osat SET osanimi = $1, osaalk = $2 WHERE osanro = $3',
        values: [udOsa.osanimi, udOsa.osaalk, req.params.osanro]
    }
    db.query(query, (err, result) => {
        if (err) {
            return console.error(virhe, err.stack);
        }
    })
    res.json(udOsa);
}

// poista kaikki osat
const poistaKaikkiOsat = () => {
    db.query('DELETE FROM osat', (err, result) => {
        if (err) {
            return console.error(virhe, err.stack);
        }
    });
}

module.exports = {
    haeOsat: haeOsat,
    haeOsanro: haeOsanro,
    lisaaOsa: lisaaOsa,
    poistaOsa: poistaOsa,
    muokkaaOsa: muokkaaOsa,
    poistaKaikkiOsat: poistaKaikkiOsat
}