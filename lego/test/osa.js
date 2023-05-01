// Node.js @Metropolia AMK
// Luku 8, Testaus
// Osat-tauluun kohdistuvien kyselyjen testitoiminnot
// Virve Rajasärkkä 2023

const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../index');
const query = require('../db/osat');
const should = chai.should();
chai.use(chaihttp);

const testiosa = {
    osanro: 0,
    osanimi: 'Testiosa',
    osaalk: 2023
}

// kuvaa testitapaukset toiminnon mukaan ryhmiteltynä
// parametrit: kuvaus ja tähän toimintoon liittyvät testitapaus/-kset
// Toiminto: POST
describe('/POST osat', () => {
    beforeEach((done) => {
        query.poistaKaikkiOsat();
        done();
    });

    // luo jokaisen parametrinä saadun testitapauksen
    it('Lisää osa', (done) => {
        // kokoaa palvelimelle post-pyynnön
        chai.request(app)
            .post('/api/osat')
            .set('Content-Type', 'application/json')
            // lähettää sen
            .send(JSON.stringify(testiosa))
            // tarkistaa vastauksen
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('osanro');
                done();
            });
    });
});

// Toiminto: GET
describe('/GET osat', () => {
    it('Hae kaikki osat', (done) => {
        chai.request(app)
            .get('/api/osat')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
                done();
            });
    });
});