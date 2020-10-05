let router = require('express').Router();
let fj = require('./data/fakultasjurusan');
var ceritaController = require('./controller/ceritaController');

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

router.get('/fakultas', function (req, res) {
    res.end(JSON.stringify({data: fj.jurusan}));
});

router.route('/cerita')
    .get(ceritaController.index).post(ceritaController.new);

module.exports = router;