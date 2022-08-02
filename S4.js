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

function fibo(num) {
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

fibonacciSequence(7);