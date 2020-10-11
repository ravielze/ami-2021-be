let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let helmet = require('helmet');
let cors = require('cors');
require('dotenv').config()

let app = express();
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(helmet());
app.disable('x-powered-by');
app.use(cors());

app.use(bodyParser.json());
mongoose.connect(process.env.DB || 'mongodb://localhost/ami', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
if(!db)
    console.log("> Error connecting db")
else
    console.log("> Database connected successfully")

app.get('/', (req, res) => res.send('AMI 2021 - API'));
let apiR = require("./main-routes");
app.use('/api', apiR);
app.set('trust proxy', 1);

var port = process.env.PORT || 8080;
app.listen(port, function () {
     console.log(">> Running Application on port " + port);
});