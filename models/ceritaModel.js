var mongoose = require('mongoose');
let fj = require('../data/fakultasjurusan');

var ceritaSchema = mongoose.Schema({
    nama: String,
    nim: Number,
    jurusan: String,
    fakultas: String,
    angkatan: Number,
    line_id: String,
    cerita: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Cerita = module.exports = mongoose.model('cerita', ceritaSchema);
module.exports.get = function (callback, limit) {
    Cerita.find(callback).limit(limit);
}