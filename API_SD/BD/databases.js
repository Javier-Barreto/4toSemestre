var mysql = require("mysql");

/*Connection to first database
const mysqlconnection1 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Jbderas12A',
    database: 'venta_mangas',
    port: '3306'
});

mysqlconnection1.connect(function(err){
    if(!err)
    {
        console.log("Connection to DB1 sucefull");
    }
    else
    {
        console.log(err)
        return;
    }
});*/



//Connection to second database
const mysqlconnection2 = mysql.createConnection({
    host: 'https://www.db4free.net/phpMyAdmin/index.php?route=/database/structure&server=1&db=centro_de_ocio',
    user: 'javroot12',
    password: '95728182',
    database: 'centro_de_ocio',
});

mysqlconnection2.connect(function(err){
    if(!err)
    {
        console.log("Connection to DB2 sucefull");
    }
    else
    {
        console.log(err)
        return;
    }
});



/*Connection to third database
const mysqlconnection3 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Jbderas12A',
    database: 'venta_mangas',
    port: '3306'
});

mysqlconnection3.connect(function(err){
    if(!err)
    {
        console.log("Connection to DB3 sucefull");
    }
    else
    {
        console.log(err)
        return;
    }
});*/

//module.exports = mysqlconnection1, mysqlconnection2, mysqlconnection3;