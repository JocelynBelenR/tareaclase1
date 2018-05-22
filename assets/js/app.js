window.onload = function (){

    //Nombre en HTML + Bienvenida 
function functionWelcome (){
    var user = document.getElementById("name").value;
    var p = document.getElementById("welcomeMsje");
    p.innerHTML = "Bienvenida " + user;
}

//Boton para breaking bad 
var btn = document.getElementById("button-brb")
//Texto de datos curioso
var txt = document.getElementById ("datoC");


btn.addEventListener('click', function(){
       
    txt.innerHTML = "<h2>Git & Github te amamos </h2>";
})
}