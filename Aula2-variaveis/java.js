/*tipos primitivos

console.log("bolean:");

//bolean
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));

console.log("number:");

//number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

console.log("string:")

//string
var palavra = "arthur"
console.log(palavra)
console.log(typeof(palavra))

//como declarar
var variavel = "arthur"
variavel = "duarte"
console.log(variavel)

let variavel2 = "arthur"
variavel2 = "duarte"
console.log(variavel2)

const valor = "arthur"
valor = "duarte"
console.log(valor)*/

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocarInterno = "local";
    console.log(escopoLocarInterno);
}
escopoLocal();
