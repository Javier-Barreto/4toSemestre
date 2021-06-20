var mysql = require('../../BD/mysql');
//var activity = require('../models/activities');

module.exports = {
    NuevaA:(req,res)=>{// Crear nuevas actividades_pendientes
        mysql.query('INSERT INTO actividades_pendientes(nombre,descripcion,fecha,valor,seleccionada)  Values(?,?,?,?,?)', 
        [req.body.nombre, req.body.dsc, req.body.fecha, req.body.valor, req.body.seleccionada], (err, rows, fields)=>{
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    },

    ListarAP:(req,res)=>{// Obtener las actividades_pendientes
        mysql.query(`SELECT * FROM actividades_pendientes WHERE seleccionada = 'N'`, (err, rows, fields)=>{
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    },

    ListarAC:(req,res)=>{// Obtener las actividades_completadas
        mysql.query('SELECT * FROM actividades_completadas', (err, rows, fields)=>{
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    },

    BuscarA:(req,res)=>{// Obtener las actividades_completadas
        mysql.query('SELECT * FROM actividades_pendientes WHERE nombre = ?',req.body.nombre,(err, rows, fields)=>{
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    },

    ActualizarA:(req,res)=>{// Actualuzar una de las actividades_pendientes
        mysql.beginTransaction((err)=>{
            if(err)
            {
                rs.json(err);
            }
            else
            {
                mysql.query('UPDATE  actividades_pendientes SET seleccionada = ? WHERE id = ?',[req.body.selec, req.body.id] ,(err, rows, fields)=>{
                    if(err)
                    {
                        mysql.rollback(()=>{
                            res.json(err);
                         });
                    }
                    else
                    {
                        mysql.commit(()=>{
                            if(err){
                               mysql.rollback(()=>{
                                  res.json(err);
                               })
                            }
                        });
                    }
                })
            }
        })
    },

    AComp:(req,res)=>{// Crear nuevas actividades_pendientes
        mysql.beginTransaction((err)=>{
            if(err)
            {
                res.json(err);
            }
            else
            {
                mysql.query('INSERT INTO actividades_completadas(nombre,descripcion,fecha,valor,info)  Values(?,?,?,?,?)',
                [req.body.nombre, req.body.descripcion, req.body.fecha, req.body.valor, req.body.info], (err, rows, fields)=>{
                    if(err)
                    {
                        mysql.rollback(()=>{
                            res.json(err);
                         });
                    }
                    else
                    {
                        mysql.query('DELETE FROM actividades_pendientes WHERE id = ?', req.body.id, (err, rows, fields)=>{
                            if(err)
                            {
                                mysql.rollback(()=>{
                                    res.json(err);
                                 });
                            }
                            else
                            {
                                mysql.commit(()=>{
                                    if(err){
                                       mysql.rollback(()=>{
                                          res.json(err);
                                       })
                                    }
                                });
                            }
                        })
                    }
                })
            }
        });
    }
}