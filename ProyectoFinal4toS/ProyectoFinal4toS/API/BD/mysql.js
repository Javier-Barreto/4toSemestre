const mysql = require('mysql');

const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'@Jbderas12A',
    database: 'dbactividades'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports=mysqlConnection;