const Connection = require('mysql/lib/Connection');
let mysql=require('../../db/mysql');
let invoice=require('../models/invoice');
module.exports = {
   create:(req,res)=>{
      //{date, total, amount, products[id_product, quantity, cost]}
      console.log(req.body);
      let rfc=req.body.rfc;
      let total=req.body.total;
      let tax=req.body.tax;
      let productos=req.body.detalles;
      let validacion = true;//Variable para validar que haya productos disponibles para vender.
      let ver = new Array();//Variable que guarda información temporal para poder realizar la actualización de la información de los productos
      //que ya se vendieron.


      //Rollback: cancela todos los cambios hechos.
      //Commit: Hace que todos los cambios sean permanentes.

         if(productos.length==0)
         {
            console.log("No ha seleccionado ningun producto")
         }
         else
         {
            mysql.beginTransaction((err)=>{
               if(err)
               {
                  res.json(err);
               }
               else{
                  productos.forEach(cantt=>{
                     mysql.query('SELECT * FROM product WHERE product.id = ?',cantt.id,(err,rows,fields)=>{
                        ver.push({idp:rows[0].id, cant:rows[0].quantity, cantm:cantt.quantity});
                        console.log("Cantidad: "+rows[0].quantity)
                        if(rows[0].quantity>0)
                        {
                           validacion=true;
                        }
                        else
                        {
                           validacion=false;
                        }

                        if(validacion==false)
                        {
                           mysql.rollback(()=>{
                              console.log("Ya no hay mas productos de: "+rows[0].name)
                           })
                        }
                     })
                  })
                  mysql.query('insert into invoice (date,payment,tax,customer_rfc) values(?,?,?,?)',['2021/05/11',total,tax,rfc],(err,rows,fields)=>{
                     if(err)
                     {
                        mysql.rollback(()=>{
                           res.json(err);
                        });
                     }
                     else
                     {
                        console.log("Se inserto el ",rows.insertId);
   
                        productos.forEach(element => {
                           mysql.query('insert into invoice_detail (invoice_id, product_id, quantity, cost) values(?,?,?,?)',[rows.insertId, element.id, element.quantity, element.cost], (err,rows,fields)=>{
                              if(err)
                              {
                                 mysql.rollback(()=>{
                                    res.json(err);
                                 })
                              }
                              else
                              {
                                 ver.forEach(resta =>{
                                    if(resta.cant-resta.cantm<0)
                                    {
                                       console.log("Se canceló la operación debido a que la venta de los productos supera a la cantidad existente");
                                       mysql.rollback(()=>{
                                          res.json(err);
                                       })
                                    }
                                    else
                                    {
                                       mysql.query("UPDATE company.product SET quantity = ? WHERE (id = ?);",[resta.cant-resta.cantm, resta.idp],(err,rows,fields)=>{
                                          if(err){
                                             mysql.rollback(()=>{
                                                res.json(err);
                                             })
                                          }
                                          else
                                          {
                                             mysql.commit(()=>{
                                                if(err){
                                                   mysql.rollback(()=>{
                                                      res.json(err);
                                                   })
                                                }
                                                console.log('Transaccion completa.');
                                             });
                                          }
                                       })
                                    }
                                 });
                              }
                           });
                        });
                     }
                  });
               }
            });
         }
      
   },
   list:(req,res)=>{
      mysql.query('select * from invoice',(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   },
   find:(req,res)=>{
      mysql.query('select * from order o inner join order_details d on o.id=d.order_id where o.id=?',req.params.id,(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
   }
}
