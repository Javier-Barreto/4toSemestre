let mysql = require('../../BD/databases')

module.exports = {
    list:(req,res)=>{
        mysql.query("SELECT * FROM productos",(err,rows,fields)=>{
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