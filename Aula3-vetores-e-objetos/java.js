// //o que são vetores ou arrays

// //como declarar um arrray

// // let array = ["string", 1, true]
// // console.log(array)

// // pode guardar varios tipos de dados

// let array = ["string", 1, true,["array1"], ["array2"],["array3"] ]
// console.log(array[0])

// // //forEach
// // array.forEach(function(item, index){console.log(item, index)})

// //push
// // array.push("novo item")
// // console.log(array)

// //pop
// // array.pop();
// // console.log(array)

// //shift
// // array.shift();
// // console.log(array);

// //unshift
// // array.unshift("novo item no inicio");
// // console.log(array);

// //indexof
// // console.log(array.indexOf(true))

// //splice
// //  console.log(array.splice(3, 6));

// //slice
// let novoArray = array.slice(3,6);
// console.log(novoArray)

//obejeto
let object = {    string:"string",    number:1,    boolean: true,    array: ["array1"],    objectInterno:{objectInterno: "objeto interno"}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var array = object.array
console.log(array)
var {string,boolean,obje} = object;
console.log(object)
