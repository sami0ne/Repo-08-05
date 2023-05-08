$(document).ready(function(){
    //alert("Bienvenido");
})

$(function(){
    $("p").css({"background-color" : "blue", "color" : "white"});
    $(".second").css({"background-color" : "red"});
    $("#cuarto").css({"background-color" : "green"})
})

$("#botonMostrar").click(function(){
    $("#primero").show();
})

$("#botonOcultar").click(function(){
    $("#primero").hide();
})

$("#segundo").mouseenter(function(){
    //$("#quinto").hide();
    //$("#quinto").fadeIn();
    //$("#quinto").slideUp();
})

$("#primero").mouseenter(function(){
    //$("#quinto").show();
    $("#quinto").fadeOut();
    //$("#quinto").slideDown();
})

$("#primero").on("mouseenter", function(){
    //$("#quinto").slideDown();
})

//"$("#cuarto").animate({width: "300px"});
//$("#cuarto").animate({fontSize: "30px"});
//$("#cuarto").animate({marginLeft: "500px"});
//$("#cuarto").animate({marginTop: "500px"});
//$("#cuarto").animate({marginLeft: "0px"});
//$("#cuarto").animate({marginTop: "0px"});

/* setInterval(function(){
    $("#cuarto").animate({width: "300px"});
    $("#cuarto").animate({fontSize: "30px"});
    $("#cuarto").animate({marginLeft: "500px"});
    $("#cuarto").animate({marginTop: "500px"});
    $("#cuarto").animate({marginLeft: "0px"});
    $("#cuarto").animate({marginTop: "0px"});  maxlength
    console.log("intervalo");
}, 100) shif + alt + a para comentar todo*/

$(function(){
    $("#miFormulario").validate({
        rules:{
            rut:{required: true, minlength: 9, maxlength: 9},
            nombre:{required: true, minlength: 3, maxlength: 10},
            apellido:{required: true, minlength: 10, maxlength: 15},
        },
        messages:{
            rut:{
            required: "Debe ingresar su rut sin puntos y guión", 
            minlength: "El minimo de caracteres es 9", 
            maxlength: "El maximo de caracteres es 9"
                },
            nombre:{
            required: "Debe ingresar su nombre", 
            minlength: "El minimo de caracteres es 3", 
            maxlength: "El maximo de caracteres es 10"
                },
            apellido:{
                required: "Debe ingresar su nombre", 
                minlength: "El minimo de caracteres es 10", 
                maxlength: "El maximo de caracteres es 15"
                },
        }
    })
})

$.getJSON ('https://mindicador.cl/api', function(data){
    console.log(data.dolar.valor);

    const contenedor = document.getElementById("contenedor")
    const row = document.createElement("div");
    const col = document.createElement("div")
    const h3 = document.createElement("h3")

    h3.textContent = "El valor del dolar es: " + data.dolar.valor

    row.classList.add("row");
    col.classList.add("col");
    col.classList.add("mt-5");

    contenedor.appendChild(row);
    row.appendChild(col);
    col.appendChild(h3);

    
    
})
//Este busca altiro(a tiempo real y da recomendaciones)
/*$(function(){
    $("#txtBuscar").on("keyup", function(){
        //console.log("keyUp");
        let valor = $(this).val().toLowerCase();
        $("table tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > 1);
        })
    })
})*/

//Este busca exacto cuando aprietas el boton
$(function(){
    $("#btnBuscar").on("click", function(){
        //console.log("keyUp");
        let valor = $("#txtBuscar").val().toLowerCase();
        
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > 1);
        })
    })
})

//cntrl + espacio + enter

