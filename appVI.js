/* 
   Se utilizara yargs...
   para evitar los errores que se tienen delina de comando...
   Aqui usaremos la opcion de COMMAND pra yargs

*/


/*
   Tema: ISNTALL UNINSTALLA USAREMSO YARGV
   seccion: 4
   Ejemplo: app.js
   leccion: 34 Listar desde linea de comando
*/


const multiplicaNormal = require("./multiplicar/operaciones");
const argv=require('yargs')
                   .command('listar','Desplegar tabla de multiplicar',{
                      base:{ demand: true,
                             alias:  'b'   
                      },
                      limite:{ demand: true,
                             alias:  'l',
                             default:10
                      } 
                   
                    })
                   .help()
                   .argv;
let tema = "Bases de Node Psando parametros";

console.log("<--Ini-----------------------[", tema, "]----------->");
//---------------------------------  1 .-  ----------------------------------------------------------------->
console.log(" ");
console.log("<--1--[Pasando Parametros Multipliacion]---->");
console.log(" ");

//let argv2 = process.argv;
//let base = argv2[2].split("=")[1];
console.log("     <---Version con yrags Objeto Completo argv------------------->");
console.log('',argv);
console.log("     <---Sacando datos argv.base------------------->");
console.log("         argv.base=", argv.base);
console.log("     <---Sacando datos argv.limite------------------->");
console.log("         argv.l=", argv.l);
console.log("     <---------------------->");

//console.log("version normal", argv2);
//console.log("     <----------------------->");
//console.log(base);
let base = argv.base;
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
