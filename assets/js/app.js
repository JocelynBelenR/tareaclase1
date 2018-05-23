window.onload = function (){

    //Nombre en HTML + Bienvenida 
function functionWelcome (){
    var user = document.getElementById("name").value;
    var p = document.getElementById("welcomeMsje");
    p.innerHTML = "Bienvenida " + user;
}

//Boton para breaking bad 
var btn = document.getElementById("button-brb");
//Texto de datos curioso
var txt = document.getElementById ("datoC");
//foto
var img = document.getElementById ("pic");

btn.addEventListener('click', function(){
       
    txt.innerHTML = "<p> Anna Gunn es la actriz que dio vida al personaje de Skyler White, años más tarde escribiría en The New York Times, luego del final de la serie, un interesantísimo artículo en que habla sobre el odio que le profesan a su personaje... y a ella misma. Explica que se trata de una especie </p>";
    document.getElementById("pic").src = "breaking-bad.jpg";
})
}