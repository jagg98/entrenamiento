"use stric"

const retornarAnalistasPorGenero = (letra) => {
    
    const usuarios = [
        {genero: 'F', nombre:'Luisa'},
        {genero: 'F', nombre:'Camila'},
        {genero: 'M', nombre:'Simón'},
    ]
    return usuarios.filter(({genero}) => {
        return genero == letra
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
        if (genero != "M" && genero != "F"){
            callback("Error... letra invalida", null)
        }
        else {
            
            callback(null ,retornarAnalistasPorGenero(genero))
        }
    }, timepoConexion)
    

}


module.exports={
    conectarBD,
    consultaPorGenero
}