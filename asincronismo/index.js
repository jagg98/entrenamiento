"use stric"

const {conectarBD,consultaPorGenero,consultarActividad} = require("./utils/utils")

conectarBD("MiBD","123456",(error,respuesta) => {

    if (error){
        return console.error(error)
    }
    if (respuesta == false){
        return console.error("no se pudo conectar a la BD, contraseña o nombre invalido")
    }
    console.log("conexion exitosa, puede hacerse peticiones")
    let nombre = "Laura"
    consultaPorGenero(nombre,(error,respuesta) => {
        if (error){
            return console.error(error)
        }
        if (respuesta && respuesta.length != 0){
            console.log(respuesta)
            consultarActividad(nombre,(error,respuesta) => {
                if(error){
                    return console.error(error)
                }
                if(respuesta){
                    return console.log(respuesta)
                }
            })
        }

    })
})



