Cerita = require("../models/ceritaModel");


exports.index = function (req, res) {
    Cerita.get(function (err, listCerita) {
        if (err) {
            res.status(400).json({
                status: "error",
                data: []
            });
        } else {
            res.status(200).json({
                status: "success",
                data: listCerita
            });
        }
    });
};

exports.new = async function (req, res) {
    const {nama, nim, jurusan, angkatan, line_id} = req.body;
    const c = await Cerita.create({nama, nim, jurusan, angkatan, line_id});
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: c
    });
};