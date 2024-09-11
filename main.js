

// //Ejer 1
// const a=5
// const b=10
// const c=a+b
// console.log (`la suma de a y b es : ${c}`)

// //Operadores lógicos y condicionales 
// //ejer 1


// const userName= prompt('Ingrese su nombre')
// console.log(`Hola , ${userName}!`)


// const a2=2
// const b2=3
// const c2=0
// const biggerNum=Math.max(a2,c2,b2)
// console.log("El mayor numero de los 3 es el : "+ biggerNum)
// //ejer 2
// const numeroIngresado= prompt("Ingrese un numero y te dire si es par o impar ")
//  if(numeroIngresado%2==0){
//   console.log(`El ${numeroIngresado}, es par `)
//  }else{
//   console.log(`El ${numeroIngresado}, es impar `)
//  }


//  //Operadores de asignacion y bucles
//  //ejer 1

//  let variableADescontar= 10

//  while(variableADescontar!==0){
//   console.log(variableADescontar)
//   variableADescontar--
//  }

//  //ejer2
//  let numeroMayorACien=0
//  do{
//      numeroMayorACien= prompt('Ingrese un numero mayor a 100')
//  }while(numeroMayorACien<100)
//   console.log(`Ingresaste un número mayor a 100 : ${numeroMayorACien}`)

//4 Funciones de JS
//ejer 1 

// function esPar(num){
//     if(num%2==0){
//       return true;
//     }else{
//       return false
//     }
// }

// console.log(`El numero 8 es par : ${esPar(8)}`)
// console.log(`El numero 7 es par : ${esPar(7)}`)
// //ejer2
// function convertirCelsiusAFarenheit(celsius){
//   const farenheit= celsius * 1.8+32
//   console.log(`${celsius}°C son equivalentes a ${farenheit}°F`)
// }
// convertirCelsiusAFarenheit(30)

//OBJETOS EN JS
//ejer 1

const persona={
  nombre:'Julian',
  edad:20,
  ciudad:'Mendoza',
  cambiarCiudad : function(ciudad){
    this.ciudad=ciudad
  }

}


console.log(persona)
persona.cambiarCiudad('Buenos Aires')
console.log(persona)

//ejer2
const libro={
  titulo:'El Quijote',
  autor:'Borges',
  anio:20,
  estado: function(){
    if(this.anio>10){
    console.log(`El libro ${libro.titulo} es antiguo`);
    }else{
      console.log(`El libro ${libro.titulo} es reciente `);
    }
  }
}

  libro.estado();

//Arrays 
//ejer1
const numero=[1,2,3,4,5,6,7,8,9,10]
function multNum(){
  console.log(`numeros multiplicados por 2 son `)
  let nuevoArray=[]
  numero.forEach(e => {
    nuevoArray.push(e*2)
  });
  console.log(nuevoArray)
}
multNum()

let pares =[]

for (let index = 1; index < 20; index++) {
  if(index%2==0){
    pares.push(index)
  }
  
}
console.log(`Primeros 10 numeros pares :   [${pares}]`)

//INTRODUCCION AL DOM 
//ejer 1
const button = document.getElementById('parrafo-button');
const parrafos = document.getElementsByClassName('parrafo');

button.addEventListener('click', () => {
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = 'blue';
  }
});

const inputName = document.getElementById('inputName')
const buttonForm = document.getElementById('buttonForm')
buttonForm.addEventListener('click', ()=>{
  alert('Has ingresado : '+ inputName.value)
})

//eventos del dom 8'
//ejer 1 
const lista = document.getElementById('listaElementos');
const elementos = document.getElementsByClassName('elementos');

// Agregar un manejador de eventos a cada elemento
for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
        console.log( this.textContent);
    });
}
//ejer2
const textoInput = document.getElementById('textoInput')
const habilitar = document.getElementById('habilitar')
const deshabilitar = document.getElementById('deshabilitar')
habilitar.addEventListener('click', () => {
  textoInput.disabled = false; // Habilitar el input
});

deshabilitar.addEventListener('click', () => {
  textoInput.disabled = true; // Deshabilitar el input
});

//

const email = document.getElementById('email')
const agregarCorreo= document.getElementById('agregarCorreo')
const eliminarCorreo= document.getElementById('eliminarCorreo')
const listaCorreos= document.getElementById('listaCorreos')

agregarCorreo.addEventListener('click', ()=>{
    event.preventDefault();
    const nuevoEmail = document.createElement('p')
    nuevoEmail.textContent= email.value;
    listaCorreos.appendChild(nuevoEmail)
    
})
eliminarCorreo.addEventListener('click', ()=>{
  const ultimoCorreo = listaCorreos.lastElementChild;
  if (ultimoCorreo) {
      listaCorreos.removeChild(ultimoCorreo);
  } else {
      alert('No hay correos para eliminar.');
  }
    
})
