
const fs = require("fs");


//module.exports.crearArchivo = (base) =>{  <-- Es una alternativa si no quieres exportarlo como abajo
// en module.exports de la linea 23
let  crearArchivo = (base) =>{
 return new  Promise( (resolve,reject)=> {
         data = "";
         if(!Number(base)){
             reject(` (${base}) No es un numero bro, no se genera nada`);
             return;
         }
        for (let i = 1; i <= 10; i++) {
        console.log(`indice ${i} * ${base} = ${base * i}`);
        data += `indice ${i} * ${base} = ${base * i}  \n`;
        }
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, function (err) {
        if (err)
          reject(err)
        else     
          resolve (`tabla-${base}`)
        });
 }); 
}

let crearArchivoLimitado = (base,limite) => {
  return new Promise((resolve, reject) => {
    data = "";
    if (!Number(base)) {
      reject(` (${base}) No es un numero bro, no se genera nada`);
      return;
    }
    for (let i = 1; i <= limite; i++) {
      console.log(`indice ${i} * ${base} = ${base * i}`);
      data += `indice ${i} * ${base} = ${base * i}  \n`;
    }
    fs.writeFile(`./tablas/crearConlimite-${limite}-${base}.txt`, data, function (err) {
      if (err) reject(err);
      else resolve(`tabla-${base}`);
    });
  });
};

let crearSolamente = (base) => {
  return new Promise((resolve, reject) => {
    data = "";
    if (!Number(base)) {
      reject(` (${base}) No es un numero bro, no se genera nada`);
      return;
    }
    for (let i = 1; i <= 10; i++) {
    //  console.log(`indice ${i} * ${base} = ${base * i}`);
      data += `indice ${i} * ${base} = ${base * i}  \n`;
    }
    fs.writeFile(`./tablas/crear-${base}.txt`, data, function (err) {
      if (err) reject(err);
      else resolve(`tabla-${base}`);
    });
  });
};


let listar = (base,limite) => {
  return new Promise((resolve, reject) => {
    data = "";
    console.log("         Base--->".grey, base + "--".warn);
    console.log("         Limi--->".grey,limite +"--".warn);    
    if (!Number(base)) {
      reject(` (${base}) No es un numero bro, no se genera nada`);
      return;
    }
    for (let i = 1; i <= limite; i++) {
      console.log(`indice ${i} * ${base} = ${base * i}`.debug);
      data += `indice ${i} * ${base} = ${base * i}  \n`;
    }

  });
};

// este sirve para exportar las  funciones que se van a utilizar
module.exports = {
  crearArchivo,
  crearSolamente,
  listar,
  crearArchivoLimitado,
  /*
     Si hubiera mas funciones se separan con coma 
     crearArchivo,
     crearArchivo
  */
};





