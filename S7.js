
/// PROGRAMACIÓN IMPERATIVA ///

// const numbers = [1, 2, 3, 4, 5]
// const doubles = []

// for(var i = 0; i < numbers.length; i++) {
//   doubles.push(numbers[i] * 2)
// }

// console.log(numbers) // [1, 2, 3, 4, 5]
// console.log(doubles) // [2, 4, 6, 8, 10]


/////////////////////////////////////////////

/// PROGRAMACIÓN FUNCIONAL ///

// const numbers = [1, 2, 3, 4, 5]
// const doubles = numbers.map((number) => number * 2)

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]


/////////////////////////////////////////////

// Ejemplo 1 - Mutando objetos

// const car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }

// // Función que muta los datos
// // function addColor(car) {
// //     car.color = 'Black'
// //     return car;
// // }

// function addColor(car) {
//     // Una opción -> const newCar = Object.assign({}, car, {color: 'Black'});
//     // La opción más común:
//     const newCar = {...car, color:'Black'}
//     return newCar;
// }

// console.log('Antes de ejecutar la función', car);

// const sameCar = addColor(car)

// console.log('Arreglo car después de ejecutar la función', car);
// console.log('Arreglo sameCar después de ejecutar la función', sameCar);

// console.log('¿Es el mismo array?', car === sameCar);

/////////////////////////////////////////////

// Ejemplo 2 - Funciones puras 
// Función pura siempre va a dar los mismos resultados sin efectos secundarios

// // Función pura 
// function add(a, b) {
//     return a + b;
// }

// // Función que no es pura
// function randomNumber(){
//     return Math.floor(Math.random() * 10);
// }

// console.log(add(2,3))
// console.log(randomNumber())

// let cart = [
//     {
//         item: 'Laptop',
//         quantity: 1
//     }
// ]

// /// Programación imperativa ///

// // function addItemToCart(item, quantity) {
// //     cart.push({
// //         item,
// //         quantity
// //     })
// // }

// // addItemToCart('Silla', 2)
// // console.log(cart)


// // Programación funcional //

// function addItemToCart(cart, item, quantity) {
//     // AQUÍ CON MAP //
//     // const newCart = cart.map(function(element) {
//     //     return element
//     // })

//     // AQUÍ CON SPREAD OPERATOR //
//     const newCart = [...cart]

//     newCart.push({
//         item,
//         quantity
//     })
//     return newCart
// }

// cart = addItemToCart(cart, 'Teléfono', 2)
// console.log(cart)

// Funciones de primera clase //
// La función de primera clase la puedes manejar como una variable común y corriente

// let sqare = function(number) {
//     return number * number;
// }

// var squareOfFour = sqare(4);

// console.log(squareOfFour)

// Funciones de orden superior // High Order Functions //

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const doubles = numbers.map(function(number) {
//     return number * 2;
// })

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// const sumAllNumbers = numbers.reduce(function(acumulador, valorActual){
//     return acumulador + valorActual;
// }, 0)

// console.log(numbers)
// console.log(doubles)
// console.log(evenNumbers)
// console.log(sumAllNumbers)

// EJERCICIO SUMA DE NÚMEROS //

// const num = 12345;

// const str = num.toString();

// console.log('Este es num', num)
// console.log('Este es str', str)

// const array = str.split('')

// console.log(array)

///////

// const array = num.toString().split('')
// console.log(array)

// // const arrayOfNumbers = array.map(function(num){
// //     return Number(num);
// // })

// ///////

// const arrayOfNumbers = array.map(Number)
// console.log(arrayOfNumbers)

// const sumAll = arrayOfNumbers.reduce(function(a, b){
//     return a + b
// }, 0)

// console.log(sumAll)

///////

// function sumDigits(number) {
//     return number  
//             .toString()
//             .split('')
//             .map(Number)
//             .reduce(function(a,b){
//                 return a + b;
//             }, 0)
// }

// console.log(sumDigits(num))


//////////////////////////////////////////

///// RETOS /////

//// Reto 1: Flatten
// Crear una función flatten que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original.

// Como yo lo hice:
// function flatten(arrays) {
//     return newArray = arrays
//         .toString()
//         .split(',')
//         .map(Number)
// }
  
// const arrays = [[1, 2, 3], [4, 5], [6]];
// const array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]

// Como lo hizo el profe
// function flatten(arrays) {
//     return arrays.reduce(function(arrayFlatten, elem){
//         return arrayFlatten.concat(elem)
//     }, [])
// }
  
// const arrays = [[1, 2, 3], [4, 5], [6]];
// const array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]


//// Reto 2: Compact
// Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.

// function compact(array) {
//     return array.filter(item => !!item)
//   }
  
//   const array = ['0', 0, [], {}, 1, false, 2, '', NaN, 3, null];
//   const compactedArray = compact(array);
  
//   console.log(compactedArray); // [1, 2, 3]


//// Reto 3: Loop
// Crear una función de alto orden loop que será similar a un for.
// Recibe tres argumentos: start, una función test, una función update y una función body.
//     El ciclo empieza en start y termina cuando test retorne false.
//     En cada iteración se ejecuta la función body dándole como argumento el valor actual de start actual.
//     Al final de cada ciclo se ejecuta la función update.

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)){
        body(value)
    }
}

const test = function(n) {
    return n > 0;
}

const update = function(n) {
    return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1