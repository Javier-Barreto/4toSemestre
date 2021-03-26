const express = require('express');
const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('../BD/databases.js');

var port = process.env.PORT || 1330;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Ruta a la sucursal1
var router = require('./routes')
app.use('/sucursales',router);

//Para dar start al servidor
app.listen(port);
console.log('API in port: '+port);