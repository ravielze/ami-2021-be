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

var allowedOrigins = process.env.ORIGINS;
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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

var port = process.env.PORT || 8080;
app.listen(port, function () {
     console.log(">> Running Application on port " + port);
});