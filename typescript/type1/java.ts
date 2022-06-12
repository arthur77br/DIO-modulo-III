let butao1 = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input") as HTMLInputElement;
function adicionarNumeros (numero1:number, numero2:number){
    return numero1 + numero2;
}
if (butao1){
butao1.addEventListener('click', () =>{
if(input1 && input2){
    console.log(adicionarNumeros(Number(input1.value),Number( input2.value)))
}
})
}
