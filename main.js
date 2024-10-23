
// Convierte la siguiente función en una función flecha:

function saludar() {
    return "Hola"
  }

const saludar1 = () => "hola" 

console.log (saludar1)

// Convierte la siguiente función en una función flecha en línea:

function division(a,b) {
    return a / b
  }

const division1 = (a,b) => a/b

console.log(division1)

// Convierte la siguiente función en una función flecha:

function miNombre(nombre) {
  return `Mi nombre es ${nombre}`
}

const miNombre1 = nombre => `Mi nombre es ${nombre}`

console.log(miNombre1)

// Convierte las siguientes funciones en funciones flecha:

const test2 = () => {

console.log(test2)

}

const test1 = (callback) => callback

console.log(test1)

// Utiliza la siguiente array para resolver los próximos ejercicios

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

// (Foreach) Crea un array con la gente mayor de 25 años con foreach y muéstralo por consola.

let mayorDe25 = []

gente.forEach(persona => {
    
  if (persona.edad > 25) {
    mayorDe25.push(persona)
  }
})

console.log(mayorDe25)

// Crea un array con la gente que empieza por J. 

let genteConJ = []

gente.forEach(persona => {

  if (persona.nombre.startsWith("J")) {
    genteConJ.push(persona)

  }
})

console.log(genteConJ)

//(Map) Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola

let mayoresDe25 = gente
  .filter(gente => gente.edad > 25)
  .map(gente => gente.nombre)

console.log(mayoresDe25)

// Crea un array con la gente que empieza por J. 

let empiezaPorJ = gente
  .filter(gente => gente.nombre.startsWith ("J"))
  .map(gente => gente.nombre)

console.log(empiezaPorJ)  

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10]
const resultado = []
for (let i = 0; i < numbers.length; i++) {
    resultado.push(Math.pow(numbers[i], numbers[i]))
}
console.log(resultado)

//(Filter) Crea un segundo array que devuelva los impares

 const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const impares = numbers.filter(num => num % 2 !== 0)
 
 console.log(impares)

//  Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62]

const resultado2 = numeros.reduce((acc, num) => acc * num, 1)

console.log(resultado2)










 




 
  