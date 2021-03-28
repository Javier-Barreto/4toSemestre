const { json } = require('body-parser');
let mysql = require('../../BD/mysql')
let vector = [];

module.exports = {
    list: (req,res)=>{
        mysql.mysqlConnection1.query(`SELECT * FROM productos`,(err,rows,fields)=>{
            if(!err)
            {
                valor(rows)
            }
            else
            {
                res.json(err);
            }
        }),
        mysql.mysqlConnection2.query(`SELECT * FROM productos`,(err,rows,fields)=>{
            if(!err)
            {
                valor(rows)
            }
            else
            {
                res.json(err);
            }
        }),
        mysql.mysqlConnection3.query(`SELECT * FROM productos`,(err,rows,fields)=>{
            if(!err)
            {
                valor(rows)
                res.json(vector)
            }
            else
            {
                res.json(err);
            }
        })
        vector = []
    },
    aproduct: (req,res)=>{
        mysql.mysqlConnection1.query(`SELECT * FROM productos WHERE NombreProducto=?`,req.params.nombre,(err,rows,fields)=>{
            if(!err)
            {
                if(rows.length==0)
                {

                }
                else
                {
                    valor("Producto encontrado en la Sucursal1")
                }
            }
            else
            {
                res.json(err);
            }
        }),
        mysql.mysqlConnection2.query(`SELECT * FROM productos where NombreProducto = ?`,req.params.nombre,(err,rows,fields)=>{
            if(!err)
            {
                if(rows.length==0)
                {
                }
                else
                {
                    valor("Producto encontrado en la Sucursal2")
                }
            }
            else
            {
                res.json(err);
            }
        }),
        mysql.mysqlConnection3.query(`SELECT * FROM productos where NombreProducto = ?`,req.params.nombre,(err,rows,fields)=>{
            if(!err)
            {
                if(rows.length==0)
                {
                }
                else
                {
                    valor("Producto encontrado en la Sucursal3")
                }

                if(vector.length>0)
                {
                    res.json(vector)
                }
                else
                {
                    res.json("No se encontró el producto")
                }
            }
            else
            {
                res.json(err);
            }
        })
        vector = []
    }
}

function valor(x){
    let i = vector.length
    vector[i] = x;
}