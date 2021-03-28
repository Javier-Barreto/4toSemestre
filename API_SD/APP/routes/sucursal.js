const router = require('express').Router();

//Ruta para los productos
var producto = require('./producto');
var ventas = require('./ventas');

router.use('/producto',producto);
router.use('/ventas',ventas);

//localhost:1339/venta_mangas
module.exports = router;