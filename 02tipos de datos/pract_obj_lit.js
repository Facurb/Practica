let curso = {
    cantidad_de_alumnos: 23,
    profesor: "Fernandez",
    horario: "8:00 hs a 12 hs",
    notificaciones: function(){
    return "El Horario De Tu Comision Es: " + this.horario
}
};
console.log( "la cant de alumnos registrados es de:  " + curso.cantidad_de_alumnos);
console.log(curso.notificaciones() );

//bloque de obj literales
function autos ( marca, modelo ){
    this.marca = marca,
    this.modelo = modelo
}

let autos_0 = new autos ("Peugeot", 306);
let autos_1 = new autos ("Fiat", "Cronos");

console.log(autos_0);
console.log(autos_1);