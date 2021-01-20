"use stric"

const {conectarBD,consultaPorGenero,consultarActividad} = require("./utils/utils_promesas")

conectarBD("MiBD","123456").then(respuesta => {
    console.log(respuesta)
    let nombre = "Simon"
    consultaPorGenero(nombre).then(respuesta =>{
        console.log(respuesta)
        if(respuesta.analistas.length != 0){
            consultarActividad(nombre).then(respuesta =>{
                console.log(respuesta)
            }).catch(error => {
                console.error(error)
            })
        }
    }).catch(error => {
        console.error(error)
    })
}).catch(error => {
    console.error(error)
})


