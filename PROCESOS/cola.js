const Proceso = require('./proceso');

module.exports =
    class Cola{
        encola
        Pcreados=0
        Pterminados=0

        constructor(){
            this.encola=[]
        }
        nuevo(np) {
            this.encola.push(np)
            this.Pcreados++;
        }

        borrar(posicion){
            console.log("El proceso número "+this.encola[posicion].numeroi+" se acaba de terminar.")
            this.encola.splice(posicion--,1)
            this.Pterminados++;
        }
    };