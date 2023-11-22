const datosUsuarios = [
    { id: 1, nombre: 'Katie', edad: 22, ciudad: 'Ciudad1' },
    { id: 2, nombre: 'Sofia', edad: 24, ciudad: 'Ciudad2' },
    { id: 3, nombre: 'Carlos', edad: 22, ciudad: 'Ciudad3' },
    { id: 4, nombre: 'Diana', edad: 30, ciudad: 'Ciudad4' },
    { id: 5, nombre: 'Luna', edad: 21, ciudad: 'Ciudad4' },
]

const publicacionesUsuarios = [
    {id:1, idUsuario: 1, contenido: 'Publicación  a' },
    {id:2, idUsuario: 4, contenido: 'Publicación  b' },
    {id:3, idUsuario: 3, contenido: 'Publicación  x' },
    {id:4, idUsuario: 4, contenido: 'Publicación  s' },
    {id:5, idUsuario: 2, contenido: 'Publicación  e' },
    {id:6, idUsuario: 3, contenido: 'Publicación  4d' },
    {id:7, idUsuario: 3, contenido: 'Publicación  df' },
    {id:8, idUsuario: 2, contenido: 'Publicación  f' },
    {id:9, idUsuario: 1, contenido: 'Publicación  df' },
];

// Crear una funcion que reciba el id de un usuario y muestre una de las siguientes salidas

//El usuario con id:xx no existe
//XXXXX vive en YYYY y no tiene ninguna publicacion
//XXXXX vive en YYYY y tiene las siguientes publicaciones 
//[
//   {....},
//   {....}
//]

//  usando async await

async function mostrarPublicaciones(idUsuario) {
    try {
        const usuario = await obtenerUsuario(idUsuario);
        const publicaciones = await obtenerPublicaciones(idUsuario);
        if (publicaciones.length === 0) {
            console.log(`${usuario.nombre} vive en ${usuario.ciudad} y no tiene ninguna publicacion`);
            return;
        }
        console.log(`${usuario.nombre} vive en ${usuario.ciudad} y tiene las siguientes publicaciones`);
        console.log(publicaciones);
    } catch (error) {
        console.log(error.message);
    }
}

async function obtenerUsuario(idUsuario) {
    const usuario = datosUsuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) {
        throw new Error(`El usuario con id:${idUsuario} no existe`);
    }
    return usuario;
}

async function obtenerPublicaciones(idUsuario) {
    const publicaciones = publicacionesUsuarios.filter(publicacion => publicacion.idUsuario === idUsuario);
    return publicaciones;
}

mostrarPublicaciones(3);