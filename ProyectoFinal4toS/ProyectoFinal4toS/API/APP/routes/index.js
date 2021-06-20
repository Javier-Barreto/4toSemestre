var router = require('express').Router();

var activities = require('./actividades');
router.use('/actividades', activities);

router.get('/', function (req,res){
    res.status(200).json({message: 'Conectado a la api'});
})

//http://localhost:1332/api
module.exports = router;