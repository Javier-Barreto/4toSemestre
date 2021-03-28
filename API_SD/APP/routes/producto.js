const s1Controller = require('../controllers/s1Controller')
const s2Controller = require('../controllers/s2Controller')
const s3Controller = require('../controllers/s3Controller')
const todo = require('../controllers/productos')

var router = require('express').Router();

router.get('/', function(req,res){
    todo.list(req,res)
});

router.get('/sucursal/1', function(req, res) {
    s1Controller.list(req,res);
});

router.get('/sucursal/2', function(req, res) {
    s2Controller.list(req,res);
});

router.get('/sucursal/3', function(req, res) {
    s3Controller.list(req,res);
});

router.get('/buscar/:nombre', function(req,res){
    todo.aproduct(req,res)
});

module.exports = router;