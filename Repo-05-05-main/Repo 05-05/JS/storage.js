function crear(){
    let array = [
        {
            nombre:"Juan",
            edad:25,
            rut:"21.133.984-8"
        },
        {
            nombre:"Jose",
            edad:18,
            rut:"21.100.123-5"
        }
    ];
    const objJson = JSON.stringify(array);
    localStorage.setItem("storage011d",objJson);
    console.log("Storage guardado");
    if(objJson == null){
        alert("No hay informacion");
    }else{
        console.log("storage",array);
    }
}

function eliminar(){
    localStorage.removeItem("storage011d");
    console.log("storage eliminado");

}

function obtener(){
    let storage = localStorage.getItem("storage011d");
    const obj = JSON.parse(storage);
    console.log("storage",obj);
}

function eliminarUno(){
    let valor = document.getElementById("txtRut").value; 
    console.log(valor.replace(".", "").replace(".", "").replace("-", ""));
    let storage = JSON.parse(localStorage.getItem("storage011d"));
    let arrayTemporal = [];
    let filtro = storage.filter(e => e.rut == valor);

    console.log("Filtro", filtro);

    if(filtro.legth == 0){
        alert("no se encontro el rut que ingreso >:(" + valor);
    }else{
        for(const i of storage){
            if(i.rut != valor){
                arrayTemporal.push(i)
            }
        }
        console.log("array temporal", arrayTemporal);
    
        localStorage.setItem("storage011d", JSON.stringify(arrayTemporal));
    }
    
}