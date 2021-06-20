var ws = new WebSocket("ws://127.0.0.1:1331/");

document.getElementById("AddActivity").addEventListener("click", ()=>{
    /*
    Funcion que se encarga de agregar nueva información a la base de datos y a su vez avisa al websocket para que
    actualice la pagina con la nueva información.
    */
    let name, dsc, fecha, valor;
    name=document.getElementById("txtname").value;
    dsc=document.getElementById("txtdsc").value;
    fecha=document.getElementById("txtdate").value;
    valor=document.getElementById("txtvalue").value;
    
    if(name==""||dsc==""||valor==""||fecha=="")//Validacion de campos vacios.
    {
        alert("Porfavor asegurese de haber llenado todos los datos")
    }
    else
    {
        var data ={nombre:name, dsc:dsc, fecha:fecha, valor:valor, seleccionada:'N'}
        fetch('http://localhost:1332/api/actividades/',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(response=>response.json())
        .catch(error => console.log(error))
        .then(json=>console.log(json))

        ws.send("nap");//nap significa Nueva Actividad Pendiente
        alert("Nueva actividad agregada correctamente.");
    }
});