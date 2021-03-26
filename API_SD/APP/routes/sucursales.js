const s1controller = require('../controllers/sucursal1Controller');
const s2controller = require('../controllers/sucursal2Controller');
const s3controller = require('../controllers/sucursal3Controller');

var router = require('express').Router();

//Obtener info sucursal1
router.get('/1', function(req, res) {
  s1controller.list(req,res)
})

//Obtener info sucursal1
router.get('/2', function(req, res) {
  s2controller.list(req,res)
})

//Obtener info sucursal1
router.get('/3', function(req, res) {
  s3controller.list(req,res)
})


//Ruta /sucursales/sucursal1
module.exports = router
