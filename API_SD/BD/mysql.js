const mysql= require('../node_modules/mysql');

const mysqlConnection1=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'@Jbderas12A',
    database: 'sucursal1'
});
mysqlConnection1.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB1 is connected');
    }
});
//------------------------------------------------------------
//------------------------------------------------------------
const mysqlConnection2=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'@Jbderas12A',
    database: 'sucursal2'
});
mysqlConnection2.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB2 is connected');
    }
});
//------------------------------------------------------------
//------------------------------------------------------------
const mysqlConnection3=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'@Jbderas12A',
    database: 'sucursal3'
});
mysqlConnection3.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB3 is connected');
    }
});
module.exports={mysqlConnection1, mysqlConnection2, mysqlConnection3};