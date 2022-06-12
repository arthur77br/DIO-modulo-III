"use strict";
var butao1 = document.getElementById("button");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input");
function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
if (butao1) {
    butao1.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
