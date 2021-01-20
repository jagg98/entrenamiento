"use stric"


const retornarActividadesPorAnalista = (query) => {
    const activiades = [
        {
            analista:"Simon",
            actividad:"Comer"
        },
        {
            analista:"Simon",
            actividad:"Correr"
        },
        {
            analista:"Simon",
            actividad:"Dormir"
        },
        {
            analista:"Simon",
            actividad:"Descansar"
        },
        {
            analista:"Laura",
            actividad:"Estudian"
        },
    ]
    return activiades.filter(({analista}) => analista === query)
}
const retornarAnalistasPorGenero = (letra) => {
    
    const usuarios = [
        {genero: 'F', nombre:'Luisa'},
        {genero: 'F', nombre:'Camila'},
        {genero: 'M', nombre:'Simon'},
    ]
    return usuarios.filter(({nombre}) => {
        return nombre == letra
    })
}

const conectarBD=(nameBD,password,callback)=>{
    console.log("Conectando a la BD...")

    let timepoConexion = Math.ceil(Math.random()*2000)
    setTimeout(() => {
        if (!nameBD){
            console.error("nombre",nameBD)
            callback("Error... nombre BD no fue enviado" ,null)
        }
        if (!password){
            console.error("password",password)
            callback("Error...password BD no fue enviado" ,null)
        }
        if (nameBD == "MiBD" && password == "123456") {
            
            callback(null ,true)
        }
        else {
            callback(null ,false)
        }

        
    }, timepoConexion)
}
const consultaPorGenero = (genero,callback) => {
    let timepoConexion = Math.ceil(Math.random()*3000)
    setTimeout(() => {
        if (!genero){
            callback("Error...letra no ingresada", null)
        }
        else {
            
            callback(null ,retornarAnalistasPorGenero(genero))
        }
    }, timepoConexion)
    

}
const consultarActividad = (analista,callback) => {
    let timepoConexion = Math.ceil(Math.random()*3000)
    setTimeout(() => {
        if(!analista){
            callback("Error... No ingresó analista" ,null)
        }
        else{
            
            callback(null ,retornarActividadesPorAnalista(analista))

        }



    }, timepoConexion)

}


module.exports={
    conectarBD,
    consultaPorGenero,
    consultarActividad
}