
/*
   Tema: Optimizacion YArgas 
   seccion: 4
   Ejemplo: app.js
   leccion: 35 Optimizacion para la configuracion de yargsYargas
   se generar la tabla config y dentro el archivo yargs
*/



const multiplicaNormal = require("./multiplicar/operaciones");
const argv = require("./config/yargs").argv;


                   let tema = "Bases de Node Psando parametros";
console.log("<--Ini-----------------------[", tema, "]----------->");
//---------------------------------  1 .-  ----------------------------------------------------------------->
console.log(" ");
console.log("<--1--[Pasando Parametros Multipliacion]---->");
console.log(" ");


    console.log("     <---Estructura de argv ------------------->");
    console.log("     ");        
    console.log("         argv:", argv);
    console.log("     ");    

let comando=argv._[0]
console.log("     <---Comando Recibido ------------------->");
console.log("     ");        

switch (comando) {
  case "listar":
    console.log("     Recibido comando: listar");
     multiplicaNormal
       .listar(argv.b, argv.l)
       .then((archivo) => console.log(`Listado exitosamente!`))
       .catch((err) => {
         console.log(err);
       });    
    break;
  case "crear":
     console.log(`     Recibido comando: crear con limite ${argv.l}`);
     console.log(`     Nombre Archivo: crearConlimite-${argv.l}-${argv.b}.txt`);
     multiplicaNormal
       .crearArchivoLimitado(argv.b, argv.l)
       .then((archivo) =>
         console.log(
           ` Crear archivo : El archivo crearConLimite-${argv.l}-${argv.b}.txt  con limite ${argv.l} ha sido creado exitosamente!`
         )
       )
       .catch((err) => {
         console.log(err);
       });
    break;
    
   default:
     console.log("    Comando No Registrado:  [", comando, "]");


}

console.log("     ");      
console.log("     ");      


//--------------------------------- [ F I N ] ---------------------------------------------------------------------------------------------------------------------------------------------------------->
setTimeout(function () {
  console.log(" "); 
  console.log(" ");
  console.log(`<--Fin-----------------------[${tema}]----------->`);
}, 1000);
