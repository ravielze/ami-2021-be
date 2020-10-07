const {check} = require('express-validator/check');

exports.validateCerita = [
    check('nama').trim().notEmpty().isLength({min:5}),
    check('nim').trim().notEmpty().isLength({min:8, max:8}).isInt(),
    check('jurusan').notEmpty(),
    check('angkatan').trim().notEmpty().isLength({min:2, max:2}).isInt(),
    check('cerita').trim().notEmpty().isLength({min:100, max:50000}),
    check('line_id').notEmpty(),
]