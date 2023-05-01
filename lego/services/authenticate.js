// Node.js @Metropolia AMK
// Luku 9, Suojaus
// Kayttajat-tauluun kohdistuvat kyselyt
// Virve Rajasärkkä 2023

const jwt = require('jsonwebtoken');
const kayttaja = require('../db/kayttajat');
const bcrypt = require('bcrypt');

// sisäänkirjautuminen
const kirjaa = (req, res) => {
    const sposti = req.body.sposti;
    // käyttäjän antama salasana
    const salasana = req.body.salasana;

    const kirjautuja = kayttaja.haeKayttajaSposti(sposti, (kayttaja) => {
        if (kayttaja.length > 0) {
            // jos käyttäjä löytyy, tietokannasta hashattu salasana
            const hash = kayttaja[0].salasana;
            // luo token
            const token = jwt.sign({userID: sposti}, process.env.SECRET_KEY);

            // jos salasanat täsmää, annetaan token
            if (bcrypt.compareSync(salasana, hash)) {
                res.send({token});
            }
            else {
                res.sendStatus(400).end();
            }
        }
        else {
            res.sendStatus(400).end();
        }
    });
}

// todenna token
const todenna = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.sendStatus(400).end();
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.sendStatus(400).end();
        }
        else {
            next();
        }
    });
}

module.exports = {
    kirjaa: kirjaa,
    todenna: todenna
}