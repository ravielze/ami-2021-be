let router = require('express').Router();
const rateLimit = require("express-rate-limit");
let fj = require('./data/fakultasjurusan');
let ceritaController = require('./controller/ceritaController');
let itbdayController = require('./controller/itbdayController');
const { validateCerita } = require('./validator/ceritaV');

const postCeritaLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 20,
    message:
      "Too many request created from this IP, please try again after an hour"
  });

router.get('/fakultas', function (req, res) {
    res.end(JSON.stringify({data: fj.jurusan}));
});

// router.route('/cerita').get(ceritaController.index);
// router.route('/cerita').post(validateCerita, postCeritaLimiter, ceritaController.new);

router.route('/itbday').post(itbdayController.index);

module.exports = router;