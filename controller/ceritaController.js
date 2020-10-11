Cerita = require("../models/ceritaModel");
const {validationResult} = require('express-validator/check');

exports.index = function (req, res) {
    Cerita.get(function (err, listCerita) {
        if (err) {
            res.status(400).json({
                status: "error",
                data: []
            });
        } else {
            let lc = [];
            let id = 1;
            listCerita.forEach(function(crt){
                lc.push({"ID": id, "Pengirim": crt.nama + " " + crt.nim, "Fakultas": crt.fakultas + " " + crt.angkatan, "Jurusan": crt.jurusan, "Cerita": crt.cerita});
                id = id+1;
            });
            res.status(200).json({
                status: "success",
                data: lc
            });
        }
    });
};

exports.new = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({ status: "not_accepted", data: [] });
    }
    const {nama, nim, jurusan, angkatan, line_id, cerita} = req.body;
    await Cerita.create({nama, nim, jurusan, angkatan, line_id, cerita});
    res.status(201).json({
        status: "success",
        data: {nama, nim, jurusan, angkatan, line_id, cerita}
    });
};