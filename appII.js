

const fs =require('fs')
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
*/
let tema = "Bases de Node ";
console.log("<--Ini-----------------------[", tema, "]----------->");
/*
   Tema: requerir paquetes  "requiere"
   seccion: 4
   Ejempo:app.js 
*/
//---------------------------------  1 .-  ----------------------------------------------------------------->
console.log(" ");
console.log("<--1--[Simple Multipliacion]---->");
console.log(" ");
let base=7;
let data='';
for (let i=1;i<=10;i++){
    console.log(`indice ${i} * ${base} = ${base*i}`);
    data +=`indice ${i} * ${base} = ${base*i}  \n`;
 };
fs.writeFile(`tablas/tabla-${base}.txt`, data, function (err) {
  if (err) throw err;
  console.log(`El archivo Tabla ${base} ha sido creado exitosamente!`);
});

//--------------------------------- [ F I N ] ---------------------------------------------------------------------------------------------------------------------------------------------------------->
setTimeout(function () {
  console.log(" ");
  console.log(" ");
  console.log(`<--Fin-----------------------[${tema}]----------->`);
}, 5000);


