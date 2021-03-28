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
    }
}

function valor(x){
    let i = vector.length
    vector[i] = x;
}