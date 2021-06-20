var activitycontroller = require('../controllers/activitiescontroller');
var router = require('express').Router();

router.get('/activitiesp', function(req, res){
    //Lista toda las actividades pendientes
    activitycontroller.ListarAP(req, res);
});

router.get('/activitiesc', function(req, res){
    //Lista toda las actividades pendientes
    activitycontroller.ListarAC(req, res);
});

router.post('/', function(req, res){
    //Agregar nueva actividad pendiente
    activitycontroller.NuevaA(req,res);
});

router.post('/especial', function(req, res){
    //Se encarga de insertar la actividad pendiente en la tabla de actividades completadas y borrar esta misma actividad pendiente
    activitycontroller.AComp(req,res);
});

router.put('/', function(req, res){
    //Modifica el estado de una actividad pendiente para que ya no le aparezca a los demas usuarios
    activitycontroller.ActualizarA(req,res);
});

http://localhost:1332/api/actividades/
module.exports = router