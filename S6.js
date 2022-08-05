
// EJEMPLO DE CONSTRUCTOR

/* const jhon = {
    name: 'Jhon',
    birthYear: 1990,
    job: 'Developer'
}

const Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

const jane = new Person ('Jane', 1985, 'designer');
const mark = new Person ('Mark', 1975, 'manager');

console.log(jane);
console.log(mark);
console.log(Person); */

//////////////////////////////////////////

// RETO 1
// Crear un function constructor Vec el cual representa un vector en dos dimensiones. 
// Recibe dos parámetros x y y, ambos valores numéricos que deben ser las propiedades del objeto.

/* Agregar los siguientes métodos al prototype de Vec:

    plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

    minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

    length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0). 
*/

/* const Vec = function(x, y) {
    this.x = x;
    this.y = y; 
}
  
const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(`Este es el vector 1 `, vec1)
console.log(`Este es el vector 2 `, vec2)

Vec.prototype.plus = function(vector){
    return new Vec(this.x + vector.x, this.y + vector.y)
}

Vec.prototype.minus = function(vector){
    return new Vec(this.x - vector.x, this.y - vector.y)
}

Vec.prototype.length = function(){
    return new Vec(Math.sqrt(this.x**2 + this.y**2))
}
  
console.log('La suma de los vectores es ', vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log('La diferencia de los vectores es ',vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log('La longitud del vector es ', vec1.length()); // 2.23606797749979 */


// Herencia

/* const Person = function(name) {
    this.name = name;
}

const Developer = function(name, skills, yearsOfExperience) {
    Person.call(this, name)

    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

const jhon = new Developer('Jhon', 'JavaScript', 10)

console.log(jhon) */

//////////////////////////////////////////

// RETO 2 
// Crear un function constructor Group el cual crea una lista (arreglo) vacía.
/* Agregar los siguientes métodos a Group:

    add: Agrega un nuevo valor al grupo solo si no existe.

    has: Retorna un booleano indicando si el valor es un miembro del grupo.

    from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo. 
*/

const Group = function() {
    this.members = [];
}

const grupo = new Group();

Group.prototype.has = function(value) {
    return this.members.includes(value);
}

Group.prototype.add = function(value) {
    if (!this.has(value)) {
        this.members.push(value)
    }
}

Group.from = function(array) {
    let group = new Group();
    for (let i = 0; i < array.length; i++) {
        group.add(array[i])        
    }
    return group
}

let listaElementos = [1, 2, 3, 4, 5]

let group = Group.from(listaElementos);

console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false
  
group.add(10);
console.log(group.has(10)); // true

//////////////////////////////////////////

// Ejemplo de prototype

/* const Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    const today = new Date();
    const year = today.getFullYear()

    console.log(year - this.birthYear)
}

const chofo = new Person('Chofo', 2000, 'gato')
const sterling = new Person('Sterling', 2005, 'gato')
const fulana = new Person('Fulana', 2000, 'gato')

console.log(chofo)
console.log(sterling)
console.log(fulana)

chofo.calculateAge() */

//////////////////////////////////////////

// Clases

/* class Person {
    constructor(name, birthYear, job) {
        this.name = name;
        this.birthYear = birthYear;
        this.job = job;
    }

    calculateAge = function() {
        const today = new Date();
        const year = today.getFullYear()
    
        console.log(year - this.birthYear)
    }
}

const chofo = new Person('Chofo', 2000, 'gato')
const sterling = new Person('Sterling', 2005, 'gato')
const fulana = new Person('Fulana', 2000, 'gato')

console.log(chofo)
console.log(sterling)
console.log(fulana)

chofo.calculateAge() */