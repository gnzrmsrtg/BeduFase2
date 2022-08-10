/// Ejercicio de base y exponente ///

/* 
let base = 2;
let exponente = 4;
let resultado = null;

function power(base, exponente) {
    resultado = base ** exponente;
    return resultado; 
}

console.log (`El resultado de base ${base} y exponente ${exponente} es ${power(base,exponente)}`);
 */


/* const firstNames = ['Jhon', 'Jane', 'Mark'];

/* function getFullNames(names) {
    const fullNames = [];

    for (const name of names) {
        fullNames.push(`${name} Doe`)
    }
    return fullNames
} 

// En modo Arrow //

const getFullNames = names => {
    const fullNames = [];

    for (const name of names) {
        fullNames.push(`${name} Doe`)
    }
    return fullNames
}

const fullNames = getFullNames(firstNames);

console.log(fullNames); */


/* const logName = name => 
    console.log(`Hello ${name}`)
    logName('José');
 */


/// Reto 2 con funciones

/* function getLargerInt(a,b) {
    if (a > b) {
        console.log (`El número mayor es ${a}`)
    } else {
        console.log (`El número mayor es ${b}`)
    }
}

getLargerInt (9, 2) // Debe regresar 9
getLargerInt (5, 7) // Debe regresar 7 

// Aquí con Arrow 

const getLargerEnt = (num1, num2) => 
    console.log (`El número mayor de estos dos es ${num1 > num2 ? num1 : num2}`);

getLargerEnt (34, 13) // Debe regresar 34

// Arrow + Array

const getLargerEntero = (num) => 
    console.log (`El número mayor de estos dos es ${num[0] > num[1] ? num[0] : num[1]}`);

getLargerEntero ([35, 13]) // Debe regresar 34
*/

// Reto 3 Fibonacci

/* function fibo(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibo(num - 1) + fibo(num - 2);
}

function fibonacciSequence(limit) {
    if (limit < 1) return console.log('El número debe ser mayor que 0')

    for (let i = 0; i <= limit; i++) {
        console.log(fibo(i))
    }
}

fibonacciSequence(7); */


////////////////////////////////////////////////

/// EJERCICIOS DE PRÁCTICA ///

// Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben ser comparados con una llamada recursiva de deepEqual.

// Usando el operador typeof puedes determinar si ambas variables son objetos, de ser así se debe llamar nuevamente deepEqual para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

// La función Object.keys() es útil para obtener las propiedades de los objetos.


function deepEqual(a, b) {
    console.log(typeof a, typeof b)
    check = a === b ? true : false;
    if (typeof a === 'object' && a != null && typeof b === 'object' && b != null) {
        deepEqual(Object.keys(a).length, Object.keys(b).length)
        obj1 = Object.keys(a)
        obj2 = Object.keys(b)
        isEqual = obj2 === obj1
        console.log(isEqual)
    } 
    return check
}
   
const john = {
firstName: 'John',
lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
   