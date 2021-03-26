const s1Controller = require('../controllers/sucursal1Controller')
const s2Controller = require('../controllers/sucursal2Controller')
const s3Controller = require('../controllers/sucursal3Controller')


//----------------------SUCURSAL1-----------
router.get('/produtos/sucursal/1', function(req, res) {
    s1Controller.list(req,res);
})

router.get('/produtos/buscar/:producto', function(req, res) {
    s1Controller.GenreManga(req,res);
})





//----------------------SUCURSAL2-----------
router.get('/produtos/sucursal/2', function(req, res) {
    s2Controller.list(req,res);
})

router.get('/produtos/buscar/:producto', function(req, res) {
    s1Controller.GenreManga(req,res);
})





//----------------------SUCURSAL3-----------
router.get('/produtos/sucursal/3', function(req, res) {
    s3Controller.list(req,res);
})

router.get('/produtos/buscar/:producto', function(req, res) {
    s1Controller.GenreManga(req,res);
})

module.exports = router
