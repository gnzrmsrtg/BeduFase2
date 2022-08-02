
// Me dio curiosidad hacer una iteración para ir sumando números uno tras otro hasta el 64
// Esto por el capítulo de Eloquent JavaScript donde habla del número de bits

let resultado = 1, nm = 0;

for (let nm = 1; nm <= 64; nm++) {
    resultado += nm;
    console.log(`Sumando ${nm} el resultado es ${resultado}`);
}


// Jugando con el operador ternario

let a = 5, b = 10, c = 15;

a > b ? console.log(`${a} es mayor que ${b}`) : console.log(`${b} es mayor que ${a}`); 

// Aquí van los ejercicios de precedencia de operadores

console.log(`== AQUÍ VAN LOS EJERCICIOS DE PRECEDENCIA DE OPERADORES ==`)

console.log(`(3 + b) * c / a * 2 = ${(3 + b) * c / a * 2}`);

console.log(`((a + b * c) / 5) * 2 = ${((a + b * c) / 5) * 2}`);

console.log(`b / a + 2 * c = ${b / a + 2 * c}`);

console.log(`(a + b + c / c) * a = ${(a + b + c / c) * a}`);

console.log(`((3 * a) / c) + a + b + c = ${((3 * a) / c) + a + b + c}`);

console.log(`a - (b + c) * a / 1 = ${a - (b + c) * a / 1}`);