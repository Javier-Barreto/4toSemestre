const Cola = require('./cola');
let cola = require('./cola')
let proceso = require('./proceso')

let ColaP = new cola;
let actual = 0
let nn=1
let pp = 0
for(i=1;i<=300;i++)
{
    if(Math.floor(Math.random()*100<=25))
    {
        
        let np = new proceso(nn);
        ColaP.nuevo(np)

        if(pp==0)
        {
            pp++
            console.log("Se creó el primer proceso en el ciclo: "+i)
            console.log("Nuevo Proceso numero: "+np.numeroi+", con duracion de: "+np.duracion+" ciclos.")
            console.log('')
        }
        else
        {
            console.log("Nuevo proceso creado en el ciclo: "+i)
            console.log("Nuevo Proceso numero: "+np.numeroi+", con duracion de: "+np.duracion+" ciclos.")
            console.log('')
        }
        nn++
    }


    if(ColaP.encola.length==1)
    {
        ColaP.encola[actual].bajar()

        if(ColaP.encola[actual].duracion==0)
        {
            ColaP.borrar(actual)
        }
    }
    else
    {
        if(ColaP.encola.length>1)
        {
            actual++
            if(actual>ColaP.encola.length-1)
            {
                actual=0
            }

            ColaP.encola[actual].bajar()

            if(ColaP.encola[actual].duracion==0)
            {
                ColaP.borrar(actual)
            }
            
        }
    }
}

console.log('------------------------------------------------------------------')
console.log('Total de procesos creados: '+ColaP.Pcreados);
console.log('Total de procesos terminados: '+ColaP.Pterminados);
console.log('Numero de procesos que se quedaron sin terminar: '+ColaP.encola.length)
