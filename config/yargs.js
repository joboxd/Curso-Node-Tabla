const colors = require("colors");
const argv = require("yargs")
            .option(`b`,{
                alias: "base",
                type: "number",
                demandOption: true,
                describe : "es la base de la tabla de multiplicar".cyan

            },
            )
            .option(`l`,{
                alias: "listar",
                type: "boolean",
                default : false,
                describe : "lista o muestra la tabla que se acab de crear".random
            }

            )
            .option(`h`,{
                alias: "hasta",
                type: "number",
                default : 10,
                describe : "pone un limite al maximo de repeticiones".random
            }

            )
            .check( (argv,options) =>{
                if(isNaN(argv.b)){
                    throw "la base tiene que ser un numero".red
                }
                return true;
            }
            )
            .argv;
module.exports = argv;            