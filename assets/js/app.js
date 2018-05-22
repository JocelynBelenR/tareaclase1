//Nombre en HTML + Bienvenida 
function functionWelcome (){
    var user = document.getElementById("name").value;
    var p = document.getElementById("welcomeMsje");
    p.innerHTML = "Bienvenida " + user;
}