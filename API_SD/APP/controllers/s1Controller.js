let mysql = require('../../BD/mysql')

module.exports = {
    list:(req,res)=>{
        mysql.mysqlConnection1.query(`SELECT * FROM productos`,(err,rows,fields)=>{
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                res.json(err);
            }
        })
    },
    producto:(req,res)=>{
        let numerosucursal = req.params.numero;
        mysql.query("SELECT * FROM ",(err,rows,fields)=>{
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                res.json(err);
            }
        })
    },
}