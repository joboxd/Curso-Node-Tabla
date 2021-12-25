const fs = require("fs");
const colors = require("colors");
const crearArchivo = async(base,listar, hasta)=>{
   try {
    const nombreArchivo=`Tabla del ${base}.txt`;
    console.clear();
     console.log("=============================".trap);
     console.log(`==    TABLA DEL :${base}      =====`.trap);
     console.log("=============================".trap);
    
    let salida="";
    let consola = "";
    
    for(let i=1;i<=hasta; i++){
        salida += `${base} X ${i} = ${i*base} \n`;
        consola += `${base} X ${i} = ${i*base} \n`.rainbow;
    
    }
    fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida);
    if(listar){
        console.log(consola);
    }
   
   return nombreArchivo;
}catch (error) {
    throw error;
    }
   } 
    

module.exports={
    crearArchivo
}