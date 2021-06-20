var ws = new WebSocket("ws://127.0.0.1:1331/");

ws.onmessage = function(e) {
    /*Funcion que al recibir un mensaje, comprara si es una nueva actividad pendiente o no y en caso de serlo, actualiza de una manera u otra*/
    console.log(e)
    if(e.data == "nap")
    {
        onlyactpend();
    }
    else
    {
        if(e.data=="nac")
        {
            alcargar();
        }
    }
};



function alcargar(){
    /*Al cargar la página, obtiene todos los registros de ambas tablas y las agrega en su respectivo html*/
    fetch('http://localhost:1332/api/actividades/activitiesp/')
    .then(response=>response.json())
    .catch(error => console.log(error))
    .then(json=>{
        let x = document.getElementById("vap");
        x.innerHTML="";
        test = "";
        json.forEach(element => {
            x.innerHTML+=`
            <button class="activiidadesp" id="btnactp" onclick="quitar('Y',${element.id}, '${element.nombre}', '${element.descripcion}', '${element.fecha}',${element.valor})">${element.nombre}</button>
            <br>`;
        });

    })


    fetch('http://localhost:1332/api/actividades/activitiesc/')
    .then(response=>response.json())
    .catch(error => console.log(error))
    .then(json=>{
        let x = document.getElementById("vac");

        x.innerHTML="";
        json.forEach(element => {
            x.innerHTML+=`
            <button class="activiidadesc">${element.nombre}</button>
            <br>`;
        });
    })
}



function quitar(selec, id, nombre, dsc, fecha, valor){
    /*Funcion que actualiza un registro y manda un aviso al websocket para que haga el cambio de que esa actividad ya no se encuentra disponible para comnpletar*/
    let data = {selec:selec, id:id}
    let data2 = {id:id, nombre:nombre, dsc:dsc, fecha:fecha, valor:valor}
    fetch('http://localhost:1332/api/actividades/',{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(response=>response.json())
    .catch(error => console.log(error))
    .then(json=>console.log(json));

    onlyactpend();
    ws.send("nap");

    let popup = document.getElementById("popup");

    popup.innerHTML=`
    <form>
        <h3>${nombre}</h3>
        <h4>${dsc}</h4>
        <div class="contenedor-input">
            <textarea id="txtinfo" cols="60" rows="10"></textarea>
        </div>
        <br>
        <button type="button" id="btnentregrar" class="btnentregrar" onclick="Entregar(${data2.id}, '${data2.nombre}', '${data2.dsc}', '${data2.fecha}',${data2.valor})">Entregar</button>
    </form>
    `;
    document.getElementById("overlay").classList.add("active");
}



function Entregar(id, nomb, dsc, fecha, valor){
    /*Funcion que envia la información a la base de datos para insertar una nueva actividad completada y borrar la actividad pendiente de la tabla de actividades_pendientes*/
    let info = document.getElementById("txtinfo").value;
    if(info=="")
    {
        alert("Porfavor, escriba algo en el campo de texto");
    }
    else
    {
        fecha = fecha.split('T',1);
        let data = {id:id, nombre:nomb, descripcion:dsc, fecha:fecha, valor:valor, info:info}
        console.log(data)
        fetch('http://localhost:1332/api/actividades/especial',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(response=>response.json())
        .catch(error => console.log(error))
        .then(json=>console.log(json));
        document.getElementById("overlay").classList.remove("active");
        ws.send("nac");
    }
}



function onlyactpend(){
    /*Funcion para actualizar las actividades pendientes*/
    fetch('http://localhost:1332/api/actividades/activitiesp/')
    .then(response=>response.json())
    .catch(error => console.log(error))
    .then(json=>{
        let x = document.getElementById("vap");
        x.innerHTML="";
        test = "";
        json.forEach(element => {
            x.innerHTML+=`
            <button class="activiidadesp" id="btnactp" onclick="quitar('Y',${element.id}, '${element.nombre}', '${element.descripcion}', '${element.fecha}',${element.valor})">${element.nombre}</button>
            <br>`;
        });

    })
}