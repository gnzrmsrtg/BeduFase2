
// SESIÓN 3

/* 
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
const doubled = []

for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
    ///// doubled[i] = numbers[i] * 2; <- Una forma de hacerlo /////
}

console.log('Numbers: ', numbers);
console.log('Doubled: ', doubled); */


/* const numbers = [1, 3, 4, 7, 2, 1, 9, 0];
const doubled = [];

for (const number of numbers) {
    doubled.push(number * 2);
}

console.log('Numbers: ', numbers);
console.log('Doubled: ', doubled);  */



/* const numbers = [1, 3, 4, 7, 2, 1, 9, 0];
const doubled = [];

for (const number of numbers) {
    if (number === 1 || number === 7) continue
    doubled.push(number * 2);
}

console.log('Numbers: ', numbers);
console.log('Doubled: ', doubled); 
 */


/// EJERCICIO DE PROMEDIO ///

/* const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
let suma = 0;

for (let i = 0; i < numbers.length; i++) {
    suma = suma + numbers[i];
}

let promedio = suma / numbers.length;

console.log('Números: ' + numbers);
console.log('Promedio: ' + promedio);  */


/// OBJETOS ///
/* 
const juanito = {
    firstName: 'Juan',
    lastName: 'Pérez',
    birthYear: 1988
}

console.log(juanito.firstName);
console.log(juanito['lastName']);

juanito.firstName = 'Juana'
juanito.lastName = 'Martínez'

console.log(`No es cierto, se llamaba ${juanito.firstName}`);
console.log(`No es cierto, se apellidaba ${juanito['lastName']}`); */


// Ejemplo convirtiendo objeto en array //

/* console.log('Vamos a convertir el arreglo en objeto');

const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

const keys = Object.keys(car);
console.log(keys);
const pairs = [];

for (let i = 0; i < keys.length; i++) {
    pairs.push([keys[i], car[keys[i]]])
}

console.log(pairs);

// Ejemplo convirtiendo array en objeto //

console.log('Ahora vamos a convertir el arreglo en objeto de nuevo');

const obj = {...car};
console.log(obj);

// Otra opción //

console.log('Esta es otra opción');

const auto = {};

for (let i = 0; i < pairs.length; i++) {
    auto[pairs[i][0]] = pairs[i][1]
}

console.log(auto); */


/// Ejemplo de destructuring ///

/* const colors = ['red', 'blue', 'green'];

const [Red, Blue, Green] = colors;

console.log(Red);
console.log(Blue);
console.log(Green);

const person = {
    firstName: 'Chofo',
    lastName: 'Ramos',
    birthYear: 2019,
    job: {
        type: 'Developer',
        yearsWorking: 5
    }
}

const {firstName, lastName} = person;

console.log(firstName);
console.log(lastName);


// Ejemplo de anidados //

const working = person.job.yearsWorking
console.log(working)

const {job: {yearsWorking}} = person;
console.log(job)
 */


const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

const {links:
    { social: {facebook: fb, instagram: ig} }
    } = person;

console.log(fb, ig)