let mysql = require('../../BD/mysql')

module.exports = {
    list:(req,res)=>{
        mysql.mysqlConnection1.query(`SELECT * FROM ventas`,(err,rows,fields)=>{
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