// Un parque aplica diferentes descuentos dependiendo del tamaño del grupo que asista////
/* let valorEntrada = 150
let cantidadPersonas = parseInt(prompt("Ingrese cuántas personas componen el grupo"))
if (cantidadPersonas===0){
  console.log("Ingrese una cantidad válida")
} else if (cantidadPersonas<=5){
  console.log("El valor de la entrada por persona es de " + valorEntrada)
} else if (cantidadPersonas<=10){
  console.log ("El valor de la entrada por persona es de " + valorEntrada/100*90) //Se le aplica un 10%
} else if (cantidadPersonas<=15){
  console.log ("El valor de la entrada por persona es de " + valorEntrada/100*85) //Se le aplica un 15%
} else if (cantidadPersonas<=19){
  console.log ("El valor de la entrada por persona es de " + valorEntrada/100*80) //Se le aplica un 20%
} else{
  console.log ("El valor de la entrada por persona es de " + valorEntrada/100*75) //Se le aplica un 25%
} */

//Calculadora de recaudación de entradas para un partido
/* 
let popu =3000
let pBaja = 6000
let pAlta = 4500
let popuVendidas = parseInt(prompt("Ingrese la cantidad de populares vendidas"))
let pBajaVendidas = parseInt(prompt("Ingrese la cantidad de plateas bajas vendidas"))
let pAltaVendidas = parseInt(prompt("Ingrese la cantidad de plateas altas vendidas"))
let vendidas = popuVendidas+pAltaVendidas+pBajaVendidas
let recauda = popu*popuVendidas + pAlta*pAltaVendidas + pBaja*pBajaVendidas

alert("Se vendieron un total de " + vendidas + "entradas y la recaudación total es de " + recauda) */


//Calculadora de IMC con tabla
/* let nombre = prompt("Ingrese su nombre")
let altura = parseInt(prompt("Bienvenidx "+ nombre + ", ingrese su altura en centímetros"))
let peso = parseInt(prompt("Ingrese su peso en kilos"))
let alturaMT = (altura/100);
let altura2 = Math.pow(alturaMT, 2)
let imc= (peso / Math.pow(alturaMT, 2))
if (imc < 18.5){
  alert(nombre + ": A partir de los datos ingresados, su IMC es " + imc +". Usted se encuentra en un peso inferior al normal. Según su altura, su peso ideal debería estar entre "+ Math.round(altura2*18.5)+ " y " + Math.round(altura2*24.9) +" kg.")
} else if (imc <25){
  alert(nombre + ": A partir de los datos ingresados, su IMC es " + imc + ". Usted se encuentra dentro de los valores normales del índice de masa corporal")
} else if (imc <30){
  alert(nombre + ": A partir de los datos ingresados, su IMC es " + imc +". Usted se encuentra en un peso superior al normal. Según su altura, su peso ideal debería estar entre "+ Math.round(altura2*18.5)+ " y " + Math.round(altura2*24.9) +" kg.")
} else {
  alert(nombre + ": Su IMC es " + imc + ". Según el índice, usted se encuentra en niveles de obesidad. Su peso ideal debería estar por debajo de los " + Math.round(altura2*24.9) + "kg.")
} */


//Calculadora de promedio y nota final
/* let nota1 = parseInt(prompt("Ingrese la nota del primer examen"))
let nota2 = parseInt(prompt("Ingrese la nota del segundo examen"))
let nota3 = parseInt(prompt("Ingrese la nota del tercer examen"))
let notafinal = parseInt(prompt("Ingrese la nota del examen final"))

notapromedio = (nota1 + nota2 + nota3)/3

if (notapromedio>=6 && notafinal>4){
  console.log("Usted ha aprobado la materia")
} else{
  console.log ("Usted ha desaprobado")
} */

//Calculadora de potencia
/* let numero = parseInt(prompt("Ingrese el número del que quiere saber su potencia"))
let potencia = parseInt(prompt("Ingrese hasta que exponente quiere calcular"))
for (i=1; i<=potencia; i++){
  console.log(Math.pow(numero, i))
} */


//Ingresar un número para saber si es número primo o no
/* let numero = parseInt(prompt("Ingrese un número"))
let nPrimo = true;

for (let i=2; i<(numero/2); i++){
  if(numero%i===0){
    nPrimo = false;
  }
}

if (nPrimo){
  console.log("Es número primo")
} else{
  console.log("No es número primo")
} */

