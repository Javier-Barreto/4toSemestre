const express = require('express');
const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 1330;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Ruta a la sucursales
var router = require('./routes/sucursal')
app.use('/api',router);

//Para dar start al servidor
app.listen(port);
console.log('API in port: '+port);