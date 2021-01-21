 /* Se utilizra la fuincion de node process.argv
 esta regresa 
      [
        "/usr/local/bin/node",
        "/Users/jess/git/curso/DeCeroAExperto/03-Bases-node/appIV.js",
      ];

Cuando le pasamos un parametro se ve de esta manera

      [
        "/usr/local/bin/node",
        "/Users/jess/git/curso/DeCeroAExperto/03-Bases-node/appIV.js",
        "parametro=10"
      ];


   lo que hace que todo lo que entra en linea de comando se pueda obtener


DE ESTA MANERA PASAMOS EL PARAMETRO EN LINEA DE COMANDO

node  appIV  parametro=11

*/


const multiplicaNormal = require("./multiplicar/operaciones");
let tema = "Bases de Node Psando parametros";

console.log("<--Ini-----------------------[", tema, "]----------->");
/*
   Tema: Paso de parametrod por linea de comando
   seccion: 4
   Ejemplo: app.js
   leccion: 31 Recibir informacion desde linea de comenado
*/
//---------------------------------  1 .-  ----------------------------------------------------------------->
console.log(" ");
console.log("<--1--[Pasando Parametros Multipliacion]---->");
console.log(" ");
/*
   process.argv[2]  Es la linea de comando de la ruta del archivo "parametro=10"
   Le aplicamos un split para quedarnos solo con el valor "10"
   entonces se le asigna al avarible Let base=  process.argv[2].split("=")[1]; que de la linea 3 
   (posicion 2 del arreglo) sacaremos del split el parametro


*/
console.log(" ");
console.log("<--A--[Veamos todo el objeto Process]---->");
console.log(" ");
console.log(process.argv);
console.log(" ");
console.log("<--B--[Obtenemos la linea 3 ]---->");
console.log(" ");
console.log(process.argv[2]);
console.log(" ");
console.log("<--C--[hacemos split en el parametro para obtener el valor]---->");
console.log(" ");
console.log(process.argv[2].split('=')[1]);
console.log(" ");
console.log("<----[Corrida normal]---->");
console.log(" ");
let base = process.argv[2].split("=")[1];

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
 

//--------------------------------- [ F I N ] ---------------------------------------------------------------------------------------------------------------------------------------------------------->
setTimeout(function () {
  console.log(" ");
  console.log(" ");
  console.log(`<--Fin-----------------------[${tema}]----------->`);
}, 5000);
