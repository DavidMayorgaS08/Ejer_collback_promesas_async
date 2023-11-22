// async await 

let empleados = [
    {id: 1, nombre: 'Miguel'}, 
    {id: 2, nombre: 'Yenny'}, 
    {id: 3, nombre: 'MCamila'}
]

let salarios = [
    {id: 1, salario: 1000}, 
    {id: 2, salario: 2000}
]

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el ID ${id}`)
    }else{
        return empleadoDB
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if(!salarioDB){
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`)
    }else{
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
    }
}

let getInformacion = async (id, horas) => {
    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)
    totalSalario = resp.salario * horas
    return `${resp.nombre} tiene un salario de ${totalSalario}`
}

getInformacion(1, 20)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))