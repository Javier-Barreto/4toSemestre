const s1controller = require('../controllers/sucursal1Controller');
var router = require('express').Router();

//Obtener info general
router.get('/productos', function(req, res) {
    s1controller.list(req,res)
  })


//Ruta /sucursales/sucursal1
module.exports = router