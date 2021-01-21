/* 
   Se utilizara yargs...
   para evitar los errores que se tienen delina de comando...
   Aqui usaremos la opcion de COMMAND pra yargs

Estaremos usando el command de manera mas amplia


*/



/*
   Tema: listar crear recibir por parametros y poner  limites 
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
