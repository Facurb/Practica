// funcion expresada

let sumar = function(numero_a, numero_b){
    return numero_a + numero_b;
}
console.log(sumar(4, 8));

// funcion declarada
function restar (numero_1, numero_2, numero_3){
    return numero_1 - numero_2 - numero_3
}
console.log(restar(20, 5, 2));

// ej scope
let mensaje = "Hola!";
function saludo (){
    let mensaje = "Chau";
    return mensaje;           // prioriza variables locales
}
console.log( mensaje);
console.log(saludo());

// repeat
function helado (){
    return ("helado" + " ").repeat(3);
}
console.log( helado());