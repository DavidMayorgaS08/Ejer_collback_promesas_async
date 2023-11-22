const articulos = [
    {
        descripcion: "Camiseta",
        precio: 2000,
        codigo: "a"
    },
    {
        descripcion: "Zapatos",
        precio: 1000,
        codigo: "b"
    },
    {
        descripcion: "Pantalones",
        precio: 3000,
        codigo: "c"
    }
];
const carritoCompras = []

const buscarBd = (codigo) => {
    return new Promise((resolve, reject) => {
        const articulo=articulos.find(item => item.codigo==codigo)
        if (articulo){
            resolve(articulo)
        }else{
            reject("Articulo no encontrado")
        }
    })
}

const agregarCarrito=(codigo,cantidad)=>{
    buscarBd(codigo).then( (articulo)=>{
        console.log(articulo);
        
        articulo.valor = cantidad * articulo.precio
        carritoCompras.push(articulo)
        
        //llamada a otra fn dependa
        
    },(err)=>{
        console.log(err);        
    } )
}
agregarCarrito("r", 5)