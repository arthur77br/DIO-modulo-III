


const btn = document.querySelector("#send");
btn.addEventListener("click", function(e){
    e.preventDefault();
    const name  = document.querySelector("#name");
    const name1  = document.querySelector("#name1");
    var n1  = name.value;
    var n2  = name1.value;
    resultado = parseInt(n1) + parseInt(n2);
   document.getElementById("resultado").innerHTML = "Resultado: "+resultado;
});