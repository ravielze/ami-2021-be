var mongoose = require('mongoose');
let fj = require('../data/fakultasjurusan');

var ceritaSchema = mongoose.Schema({
    nama: String,
    nim: Number,
    jurusan: String,
    angkatan: Number,
    line_id: {
        type: String,
        lowercase: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Cerita = module.exports = mongoose.model('cerita', ceritaSchema);
module.exports.get = function (callback, limit) {
    Cerita.find(callback).limit(limit);
}