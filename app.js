let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
require('dotenv').config()

let app = express();
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator());
mongoose.connect('mongodb://localhost/ami', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
if(!db)
    console.log("> Error connecting db")
else
    console.log("> Database connected successfully")

app.get('/', (req, res) => res.send('AMI 2021 - API'));
let apiR = require("./main-routes");
app.use('/api', apiR);

var port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', function () {
     console.log(">> Running Application on port " + port);
});