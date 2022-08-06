

// Ejercicio 1 - Operadores If / Else

/* const time = 19;
let greeting;

if (time > 0 && time < 6) {
    greeting = 'Buenas madrugadas!'  
} else if (time >= 6 && time < 12) {
    greeting = 'Buenos días!'
} else if (time >= 12 && time < 19) {
    greeting = 'Buenas tardes!'
} else if (time >= 19 && time <= 23) {
    greeting = 'Buenas noches!'
} else if (time < 0 || time > 23) {
    greeting = 'No inventes horas!'
}

console.log(greeting); */

////////////////////////////////////////////////

// Ejercicio 2 - Switch

/* const day = 4;
let text;

switch (day) {
    case 1:
        text = 'Monday'
        break;
    case 2:
        text = 'Tuesday'
        break;
    case 3:
        text = 'Wednesday'
        break;
    case 4:
        text = 'Thursday'
        break;
    case 5:
        text = 'Friday'
        break;
    case 6:
        text = 'Saturday'
        break;
    case 7:
        text = 'Sunday'
        break;
    default: 
        text = 'No inventes días'
        break;
}

console.log(text) */

////////////////////////////////////////////////

// Ejercicio 3 - Operador Ternario

/* const speed = 120;
let message;

message = speed > 100 ? 'Vas muy rápido' : 'Vas por debajo del límite'


// Forma de hacerlo con IF 

// if (speed > 100) {
//    message = 'Vas muy rápido'
// } else {
//     message = 'Vas por debajo del límite';
// } 

const isFast = speed > 100;

console.log(message)
console.log(`¿En verdad vas muy rápido? ${isFast}`) */

////////////////////////////////////////////////

// Ejemplo 4 - Bucle

/* for (let i = 0; i < 200; i++) {
    if (i === 196) continue
    console.log('Hola mundo!', i)
} */

// Reto 2 - Números pares

/* for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) console.log(i)
} */

// Reto 3 - Números primos del 0 al 100

    for (let counter = 3; counter <= 100; counter++) {
        let isPrime = true;

        for (let i = 2; i <= counter ; i++) {
            console.log(counter, i, isPrime)
            if (counter % i === 0 && i !== counter){
                isPrime = false;
            }
        }

        if (isPrime) console.log(`Número primo ${counter}`)
    }

////////////////////////////////////////////////

/// EJERCICIOS DE PRÁCTICA

/* // Aquí declaramos los datos de todos los gatos

const cats = [
    { name: 'Chofo', age: 6, color: 'Black & White' },
    { name: 'Sterling', age: 7, color: 'Orange' },
    { name: 'Bebé', age: 6, color: 'Orange' },
    { name: 'Agnes', age: 5, color: 'Black & White' },
    { name: 'Fulana', age: 2, color: 'Black & White' },
    { name: 'Solovino', age: 2, color: '' }
];

// Aquí obtenemos los nombres de cada uno de los gatos

for (let i = 0; i < cats.length; i++) {
    // Obtenemos cada uno de los nombres y lo mostramos en consola
    let nombre = cats[i]['name'];
    console.log(`El miau número ${i} se llama ${nombre}`);
}

console.log(`/// Ahora vamos a explorar sus colores ///`)

for (let a = 0; a < cats.length; a++) {
    // Sacamos cada uno de los colores y los metemos en la variable miauColor
    let miauColor = cats[a]['color']
    // Revisamos el contenido de la variable miauColor y mostramos en consola dependiendo el valor
    switch (miauColor) {
        case 'Orange':
            console.log(`${cats[a]['name']} es naranjoso`)    
            break;
        case 'Black & White':
            console.log(`${cats[a]['name']} es blanco con negro`)
            break;
        default:
            console.log(`${cats[a]['name']} quien sabe de qué color es`)
            break;
    }
}

console.log(`/// ¿Quién es el michi más viejo? ///`)

// Declaramos un array llamado miauAges
const miauAges = [];

// Guardamos en el array miauAges todas las edades de los gatos
for (let b = 0; b < cats.length; b++) {
    miauAges.push(cats[b]['age'])
}

// Calculamos el número más grande dentro del array miauAges y lo guardamos en la variable max
let max = Math.max(...miauAges);

// Revisamos nuevamente la lista de gatos y cuando coincidan con el número más alto de miauAges, imprimimos en consola que ese gato es el mayor
for (let c = 0; c < cats.length; c++) {
    if (cats[c]['age'] === max) {
        console.log(`${cats[c]['name']} es el mayor, con ${max} años`)
    }
} */
