
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
    let extract = [];
    for (let i = 0; i < list.length; i++) {
        extract.push(list[i][propertyName])
    }
    return extract
}

console.log(pluck(singers, 'name'));
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log(pluck(singers, 'band'));
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log(pluck(singers, 'born'));
// [1948, 1950, 1967, 1964]
 */

//////////////////////////////////////////////////////////////////////


/// RETO 2
/// Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, y retorne un string en forma de número telefónico.

/* function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        console.log ('La cantidad de dígitos es diferente a 10')
    } else {
    let convertString = String(numbers);
    let sinFormato = convertString.replace(/,/g, '')
    
    part1 = sinFormato.slice(0,3) 
    part2 = sinFormato.slice(3,6)
    part3 = sinFormato.slice(6,10)
    console.log(`(${part1}) ${part2}-${part3}`)
    }
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"
 */

//////////////////////////////////////////////////////////////////////

/// RETO 3 
/// Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados. 
/// La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

function findMissingNumbers (num) {
    const orderNumbers = num.sort(function(a,b){return a-b;})
    const maximo = Math.max(...orderNumbers)
    const minimo = Math.min(...orderNumbers)
    const todosNumeros = []
    
    for (let nm = minimo; nm <= maximo; nm++) {
        console.log(nm)
        for (let filt = 0; filt < orderNumbers.length; filt++) {
            console.log(filt)
            if (nm !== orderNumbers[filt]) {
                todosNumeros.push(nm)
            }
        }
    }
    console.log (todosNumeros)
/*         todosNumeros.push(nm)
    }

    const nuevoArray = todosNumeros.filter()
    console.log(nuevoArray)

    for (let filt = 0; filt < orderNumbers.length; filt++) {
        console.log(orderNumbers[filt])                        
    }
 */}


findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]