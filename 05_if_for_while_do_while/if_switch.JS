// If
let dia = "miercoles";
let clima = "lluvioso";

if ( dia == "domingo" && clima == "soleado"){
    console.log ("deberia ir a la plaza");
}
    else if (dia == "miercoles" && clima == "soleado"){
        console.log("deberia ir al cine");
    }

    else{
        console.log("deberia quedarme en casa");
    }

// if ternario
let fruta = "naranja";
console.log(fruta == "manzana" ? "buenisimo, me gusta la manzana": "que mal, queria manzana");

// switch
let semaforo = "azul"

switch(semaforo){
    case "verde":
        console.log("puede cruzar");
        break;

    case "amarillo":
        console.log( "precaución");
        break;

    case "rojo":
        console.log("no cruce");
        break;
    
    default:
         console.log("hay un fallo");
         break;
    }
