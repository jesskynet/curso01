
/*
vemos que base y limite eran iguales asi que lo que se hizo
es poneru npbjetocon lasm ismas caractaeristicas para centralizarlo.
en opts
*/
const opts = {
  base: { demand: true, alias: "b" },
  limite: { demand: true, alias: "l", default: 10 },
};

const argv=require('yargs')
                   .command('listar','Desplegar tabla de multiplicar',opts)
                   .command('crear','Genera un archivo con la tabla de multiplicar',opts)                    
                   .help()
                   .argv;



module.exports={

    argv


}