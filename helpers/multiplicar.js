const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("================================".green);
      console.log("       TABLA DEL ".green, colors.blue(base));
      console.log("================================".rainbow);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/table-${base}.txt`, salida);
    return `table-${base}.txt`;
  } catch (error) {
    return error;
  }
};

module.exports = {
  crearArchivo,
};
