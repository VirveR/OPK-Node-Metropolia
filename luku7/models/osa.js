// Node.js @Metropolia AMK
// Luku 7, MongoDB
// Sivu, jossa määritellään osan malli tietokannassa
// Virve Rajasärkkä 2023

var mongoose = require('mongoose');
// MongoDB:n skeema vastaa edellisen Luvun 6 poolia.
var Schema = mongoose.Schema;
var OsaSchema = new Schema ({
    osanro: {type: Number, required: true},
    osanimi: {type: String, required: true, maxlength: 50},
    osaalk: {type: Number, required: true}
});

module.exports = mongoose.model('Osa', OsaSchema);