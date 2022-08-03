
// Aquí declaramos los datos de todos los gatos

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
}