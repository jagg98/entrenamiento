"use stric"

const {conectarBD,consultaPorGenero} = require("./utils/utils")

conectarBD("MiBD","123456",(error,respuesta) => {

    if (error){
        return console.error(error)
    }
    if (respuesta == false){
        return console.error("no se pudo conectar a la BD, contraseña o nombre invalido")
    }
    console.log("conexion exitosa, puede hacerse peticiones")
    consultaPorGenero("M",(error,respuesta) => {
        if (error){
            return console.error(error)
        }
        if (respuesta){
            return console.log(respuesta)
        }

    })
})



