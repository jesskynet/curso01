
// no necesita la extension .js cuando es por un archivo
// FORMA UNO LA MAS TRADICIONAL DEL LLAMADO DE UN MODULO
//Abajo el llmada es asi: multiplicaNormal.crearArchivo(base).then( archivo=> console.log(`El archivo Tabla ${base} ha sido creado exitosamente!`));
const multiplicaNormal = require('./multiplicar/operaciones');


// FORMA DOS CON DESTRUCTURACION 
//El llamado seria asi; //Abajo el llmada es asi:  crearArchivo(base).then( archivo=> console.log(`El archivo Tabla ${base} ha sido creado exitosamente!`));
// sin el  prefijo de la constante superior "Multiplicar"
// Por referencia es mehor usar la version uno
const  {crearArchivo }= require("./multiplicar/operaciones");


/**
   Tenemos   tres tipos de require
   1.- los que ya viene instalados en node (ejemplo fs)
       const fs require('fs')
   2.- los que hay que instalar aparte como complementos 
       desde  NPM
       const fs require('express')
    3.- Los que son archivos de node que hemos creado y debes referencialros
        con una "pleca" / o diagonal inversa..
        const fs require('./mimodulo.js')
        se utiliara REQUIER PARA ARCHIVOS

*/
let tema = "Bases de Node require ";
console.log("<--Ini-----------------------[", tema, "]----------->");
/*
   Tema: requerir paquetes  "requiere"
   seccion: 4
   Ejempo: Multiplicar
   leccion: 30 importar archivos de nuestro proyecto
*/
//---------------------------------  1 .-  ----------------------------------------------------------------->
console.log(" ");
console.log("<--1--[Simple Multipliacion]---->");
console.log(" ");

// Forma uno del llamado donde usamos una constante nominativa "multiplicacionNormal"
//let base='w';
//let baseDos = 't';

let base=1;
let baseDos = 2;

multiplicaNormal.crearArchivo(base)
.then( archivo=> console.log(`Forma Normal       : El archivo Tabla ${base}  ha sido creado exitosamente!`))
.catch( err=>{console.log(err);});

//Forma Dos se genera la "destructuracion" y solo se llama la funcion ....
    
crearArchivo(baseDos)
.then( archivo=> console.log(`Forma Destructurada: El archivo Tabla ${baseDos} ha sido creado exitosamente!`))
.catch(err=>{console.log(err);})


//--------------------------------- [ F I N ] ---------------------------------------------------------------------------------------------------------------------------------------------------------->
setTimeout(function () {
  console.log(" ");
  console.log(" ");
  console.log(multiplicaNormal);
  /*
   esto me muestra lo que tiene el archivo 
   noten que me regresa esto: 
      { crearArchivo: [Function: crearArchivo] }

      lo que indica que los modulos a los cuales se exportan del archivo requerido
  */
  console.log(" ");
  console.log(" ");
  console.log(`<--Fin-----------------------[${tema}]----------->`);
}, 5000);


