/* 
   Se utilizara yargs...
   para evitar los errores que se tienen delina de comando...
*/


/*
   Tema: ISNTALL UNINSTALLA USAREMSO YARGV
   seccion: 4
   Ejemplo: app.js
   leccion: 31 Recibir informacion desde linea de comando
   leccion: 32 isntall uninstall  
   leccion: 33 Recibir informacion desde linea de comando
*/


const multiplicaNormal = require("./multiplicar/operaciones");
const argv=require('yargs').argv

let tema = "Bases de Node Psando parametros";

console.log("<--Ini-----------------------[", tema, "]----------->");
//---------------------------------  1 .-  ----------------------------------------------------------------->
console.log(" ");
console.log("<--1--[Pasando Parametros Multipliacion]---->");
console.log(" ");


let argv2 = process.argv;
//let base = argv2[2].split("=")[1];
console.log("     <-------->");
console.log('version con yrags',argv);
console.log("     <-------->");
console.log("version normal", argv2);
console.log("     <-------->");
//console.log(base);
/*
multiplicaNormal
  .crearArchivo(base)
  .then((archivo) =>
    console.log(
      `Forma Normal       : El archivo Tabla ${base}  ha sido creado exitosamente!`
    )
  )
  .catch((err) => {
    console.log(err);
  });
 */

//--------------------------------- [ F I N ] ---------------------------------------------------------------------------------------------------------------------------------------------------------->
setTimeout(function () {
  console.log(" "); 
  console.log(" ");
  console.log(`<--Fin-----------------------[${tema}]----------->`);
}, 5000);
