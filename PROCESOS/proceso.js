module.exports =
class Proceso{
    duracion
    constructor(numeroi){
        this.numeroi=numeroi
        this.duracion=Math.floor(Math.random() * (9-4) + 4);
    }

    bajar() {
        this.duracion--;
    }
}