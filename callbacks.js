//setTimeout(function(){
   // console.log('Hola Mundo');
//}, 1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Yesenia'
    }

    setTimeout( () => {
        //console.log(usuario);
        callback(usuario);
    }, 1500);
}

getUsuarioByID(10 , (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
    

});