class venta{
    constructor(idproducto,numsucursal,cantidad,fecha){
        this.id=null;
        this.sucursal=numsucursal;
        this.idproducto=idproducto;
        this.cantidad=cantidad;
        this.fecha=fecha;
    }
}

module.exports=venta;