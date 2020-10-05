const Cerita = require('../models/ceritaModel');

exports.createCerita = (req, res, next){
    const {nama, nim, jurusan, angkatan, line_id} = req.body;
    if (userName && email &&  isValidEmail(email)) { 
      
      // isValidEmail is some custom email function to validate email which you might need write on your own or use npm module
      User.create({
        userName,
        email,
        phone,
        status,   
      })
      .then(user => res.json(user))
      .catch(next)
    }
}