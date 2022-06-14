"use strict";
function printarSomaDeNumeros(numero1, numero2, callback) {
    resultado = numero1 + numero2;
    return callback(resultado);
}
console.log(printarSomaDeNumeros(1, 2));
