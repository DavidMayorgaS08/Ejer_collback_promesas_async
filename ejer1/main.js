let empleados = [
    {id: 1, nombre: 'Miguel'}, 
    {id: 2, nombre: 'Yenny'}, 
    {id: 3, nombre: 'MCamila'}
]

let salarios = [
    {id: 1, salario: 1000}, 
    {id: 2, salario: 2000}
]

let Empleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id)
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`)
        }else {
            resolve(empleadoDB)
            console.log(empleadoDB);
        }
    })
}

let Salario = (empleado) => {
    return new Promise((resolve, reject) => {
        const salarioDB = salarios.find(salario => salario.id === empleado.id)
        if(!salarioDB){
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`)
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    })
}

Empleado(2).then(empleado => {
    Salario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
    }, err => console.log(err))
}, err => console.log(err))

