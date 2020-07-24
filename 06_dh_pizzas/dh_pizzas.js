const inquirer = require("inquirer");

console.log('BIENVENIDO A PIZZERIA FAKU');

let questions = [
{
    tipe: "input",
    name: "cliente",
    message: "cual es su nombre?",
    validate: function (value){
    var cc = isNaN (parseFloat(value));
    if (value.length < 1){
      return "escriba su nombre";
    }
    return cc || "escriba su nombre";
    },
    filter: String
  },

{
    tipe: "input",
    name: "num telefono",
    message: "su numero de telefono?",
    validate: function (value) {
        if (value.length != 8 ){ 
          if (value.length !=10) {
          return 'no valido';
          }
        } 
        return true;
      },
},
{
    type: "rawlist",
    name: "tipo de pizza",
    message: "que pizza llevara?",
    choices: ["muzzarella", "morrones", "fugazzeta", "napolitana"],
    default: "muzzarella",
},
{
    type: 'list',
    name: 'Tamaño',
    message: 'Elija el tamaño de la pizza',
    choices: ['personal', 'mediana', 'grande'],
    default: "grande",
  },
  {
    type: "confirm",
    name: "gaseosa",
    message: "queres agregar una bebida?",
    default: false,
  },
{
    type: "list",
    name: "tipo_gaseosa",
    message: "que gaseosa llevara?",
    choices: ["cocacola", "7up", "Fanta"],
    when: answers => answers.gaseosa,
    default: "cocacola",   
  },
  {
    type: "checkbox",
    name: "empanadas",
    message: "que empanadas lleva?",
    choices: [
      new inquirer.Separator('carne'),
      {name: "carne picante",},{name: "carne suave",},
      
      new inquirer.Separator( "quesos"),
      {name: "4 quesos"},{name: "jamon y queso"},
    ],
    validate: function(answer){
      if (answer.length > 3 || answer.length < 1 ) {
        return "elija entre 1 y 3 sabores";
      }
      return true;
    },
  },
  {
    type: "confirm",
    name: "delivery",
    message: "La pizza es para llevar?",
    default: false,
  },
  {
    type: "input",
    name: "direccion",
    message: "indique la direccion",
    when: answers => answers.delivery,
    validate: function(value) {
      var valido =  isNaN (parseFloat(value));
    if (value.length < 1){
      return "Dejanos saber tu dirección para llevarte la pizza.";
    }
      return valido || "Dejanos saber tu dirección para llevarte la pizza.";
    
    },
    filter: String
  },
  {
    type: "confirm",
    name: "cliente_habitual",
    message: "sos cliente habitual?",
    default: false,
  }
]

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
})