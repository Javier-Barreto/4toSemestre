var express = require('express');
var app = express();
var cors=require('cors');
var bodyParser = require('body-parser');
const ws = require('ws');
const wsc = new ws.Server({port:1331});

var port = process.env.PORT || 1332;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
//ruta http://localhost:1332/api
var router = require('./routes');
app.use('/api', router);


//Info de aranque de servidor
app.listen(port);
console.log('API escuchando en el puerto ' + port);
console.log('Websocket activo en el puerto 1331');

//Websocket
var conexions = new Array();

wsc.on('connection', ws=>{
    conexions.push(ws);

    ws.on("message", event=>{
        if(event=="nac")
        {
            conexions.forEach(env =>{
                env.send(event);
            })
        }
        else
        {
            if(event=="nap")
            {
                conexions.forEach(env =>{
                    env.send(event);
                })
            }
        }
    })
});