const v1Controller = require('../controllers/v1Controller')
const v2Controller = require('../controllers/v2Controller')
const v3Controller = require('../controllers/v3Controller')
const todo = require('../controllers/ventas')

var router = require('express').Router();

router.get('/', function(req,res){
    todo.list(req,res)
});

router.get('/sucursal/', function(req, res) {
    res.json({Message: "En esta ruta vera las ventas de cada sucursal"})
});

router.get('/sucursal/1', function(req, res) {
    v1Controller.list(req,res);
});

router.get('/sucursal/2', function(req, res) {
    v2Controller.list(req,res);
});

router.get('/sucursal/3', function(req, res) {
    v3Controller.list(req,res);
});
module.exports = router;