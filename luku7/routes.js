// Node.js @Metropolia AMK
// Luku 7, MongoDB
// REST-päätepisteet
// Virve Rajasärkkä 2023

const express = require('express');
// luo reititin-olion
const router = express.Router();
const Osa = require('./models/osa');

// hae kaikki osat
router.get('/osat', async (req, res) => {
    try {
        // edetään vasta, kun tiedetään, löytyikö osia
        const osat = await Osa.find();
        res.send(osat);
    }
    catch (err) {
        // jos ei saatu osia, virhe 500 = palvelin ei pystynyt suorittamaan pyyntöä
        return res.status(500).json({message: err.message});
    }
});

// lisää osa
router.post('/osat', async (req, res) => {
    const tamaOsa = new Osa({
        osanro: req.body.osanro,
        osanimi: req.body.osanimi,
        osaalk: req.body.osaalk
    });

    try {
        const uusiOsa = await tamaOsa.save();
        res.status(201).json({uusiOsa});
    }
    catch (err) {
        return res.status(500).json({message: err.message});
    }
});

// poista osa osanron perusteella
router.delete('/osat', async (req, res) => {
    try {
        const delOsa = await Osa.deleteOne({osanro: req.body.osanro});
        res.status(201).json({delOsa});
    }
    catch (err) {
        return res.status(500).json({message: err.message});
    }
})

// päivitä osa osanron perusteella
router.put('/osat/:osanro', async (req, res) => {
    try {
        const updOsa = await Osa.findOneAndUpdate({osanro: req.params.osanro}, req.body);
        res.status(201).json({updOsa});
    }
    catch (err) {
        return res.status(500).json({message: err.message});
    }
});

module.exports = router;

/* *** DEPRECATED *** poista osa osanron perusteella
router.delete('/osat', async (req, res) => {
    await Osa.deleteOne({osanro: req.body.osanro}, (err, result) => {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        else {
            res.status(200).json(result);
        }
    });
}); */

/* *** DEPRECATED *** päivitä osa osanron perusteella
router.put('/osat/:osanro', async (req, res) => {
    await Osa.findOneAndUpdate({osanro: req.params.osanro}, req.body, {new: true}, (err, result) => {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        else {
            res.status(200).json({result});
        }
    });
}); */