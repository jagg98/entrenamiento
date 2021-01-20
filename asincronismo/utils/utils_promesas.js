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

const conectarBD=(nameBD,password)=>{
    console.log("Conectando a la BD...")
    return new Promise((resolve,reject) => {
        let timepoConexion = Math.ceil(Math.random()*2000)
        setTimeout(() => {
            if (!nameBD){
                console.error("nombre",nameBD)
                reject({
                    error: "No se envió el nombre de la BD"
                })
            }
            if (!password){
                console.error("password",password)
                reject({
                    error: "No se envio password de la BD"
                })
                
            }
            if (nameBD == "MiBD" && password == "123456") {
                resolve({
                    respuesta: "Conexión exitosa..."
                })
                
            }
            else {
                reject({
                    respuesta: "No se pudo conectar la BD, nombre o contraseña incorrecta..."
                })
            }
    
            
        }, timepoConexion)

    })

}

const consultaPorGenero = (genero) => {

    return new Promise((resolve,reject) => {
        let timepoConexion = Math.ceil(Math.random()*3000)
        setTimeout(() => {
            if (!genero){
                reject({
                    error: "Error...letra no ingresada"
                })
                
            }
            else {
                resolve({
                    analistas: retornarAnalistasPorGenero(genero)
                })
                
            }
            
        }, timepoConexion)
    })
}
const consultarActividad = (analista) => {
    return new Promise((resolve,reject) => {
        let timepoConexion = Math.ceil(Math.random()*3000)
        setTimeout(() => {
            if(!analista){
                reject({
                    error: "Error... No ingresó analista"
                })
                
            }
            else{
                resolve({
                    respuesta: retornarActividadesPorAnalista(analista)
                })
                
    
            }
    
        }, timepoConexion)
    })


}
module.exports={
    conectarBD,
    consultaPorGenero,
    consultarActividad
}