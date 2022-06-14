function printarSomaDeNumeros(numero1: number, numero2: number,callback: (numero: number) => number){
    let resultado =  numero1 + numero2;
    return callback(resultado);
}
console.log(printarSomaDeNumeros(1, 2))