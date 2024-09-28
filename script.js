// Hola Mundo Creativo in English
let nombre = prompt("¿What's your name?");
let mensaje = `¡Hello ${nombre}! Welcome to the JavaScript workshop`;
console.log(mensaje);

// Pedimos al usuario su edad usando prompt
let edad = prompt("¿How old are you?");

// Creamos un mensaje constante con la edad del usuario
const mensajeEdad = `Your age is ${edad}`;
console.log(mensajeEdad);

let mensajeMayoriaEdad, mensajeError, mensajeNoMayoriaEdad;

if (edad >= 18) {
    mensajeMayoriaEdad = console.log("Excellent, you meet the majority, you can enter.");
} else if (edad < 0) {
    mensajeError = console.log("Wrong number");
} else {
    mensajeNoMayoriaEdad = console.log("You are a minor, you cannot enter.");
}

/* 4. Calculadora de Operaciones */
let eleccionOperador = prompt("1. Suma  2. Resta  3. Multiplicación  4. División");
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

if (eleccionOperador == "1") {
    let suma = num1 + num2;
    console.log(`El resultado de la suma es ${suma}`);
} else if (eleccionOperador == "2") {
    let resta = num1 - num2;
    console.log(`El resultado de la resta es ${resta}`);
} else if (eleccionOperador == "3") {
    let multiplicacion = num1 * num2;
    console.log(`El resultado de la multiplicación es ${multiplicacion}`);
} else if (eleccionOperador == "4") {
    if (num2 === 0) {
        console.log("No se puede dividir por 0");
    } else {
        let division = num1 / num2;
        console.log(`El resultado de la división es ${division}`);
    }
} else {
    console.log("Opción incorrecta de operador");
}

/* 5. Comparando Números */
let nToCompare1 = parseInt(prompt("Ingrese el primer número: "));
let nToCompare2 = parseInt(prompt("Ingrese el segundo número: "));

if (nToCompare1 > nToCompare2) {
    console.log(`El número ${nToCompare1} es mayor que ${nToCompare2}`);
} else if (nToCompare1 === nToCompare2) {
    console.log(`Ambos números ${nToCompare1} y ${nToCompare2} son iguales`);
} else {
    console.log(`El número ${nToCompare1} es menor que ${nToCompare2}`);
}
