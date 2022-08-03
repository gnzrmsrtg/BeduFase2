
/* function logThis () {
    console.log(`¿Es this === window? ${this === window}`)
}

const foo = {
    logThis: logThis
}

logThis() // true

foo.logThis() // false */



/* const jhon = {
    firstName: 'Jhon',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function(birthYear) {
        const today = new Date()
        const year = today.getFullYear()
        this.age = year - this.birthYear
    }
}

console.log(jhon)

jhon.calculateAge()

console.log(jhon) */


// Ejemplo de hoisting 

/* console.log(power(4,2))

function power(base, exponent) {
    let resultado = 1;

    for (let i = 0; i < array.length; i++) {
        resultado = base ** exponent
    }
} */


/* const jhon = {
    firstName: 'Jhon',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function() {
        const today = new Date()
        const year = today.getFullYear()
        this.age = year - this.birthYear
    }
}

jhon.calculateAge()

console.log(jhon) */


//////////////////////////////////////////////////////////////////////


/// RETO 1 
/// Completar la función pluck que extrae una lista de propiedades de un arreglo de objetos.

/* var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
    let values = [];
    
    for (let i = 0; i < list.length; i++) {
        values.push(list[i][propertyName]);
    }
    
    return values
}

console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964] */


//////////////////////////////////////////////////////////////////////


/// RETO 2
/// Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, y retorne un string en forma de número telefónico.

function createPhoneNumber([numbers]) {
    let values = [];

    for (let i = 0; i < numbers.length; i++) {
        const result = values.push(numbers[i])
    }    

    return values.toString
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"


//////////////////////////////////////////////////////////////////////

/// RETO 3 
/// Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados. La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]