const realiceDatos = (dato) => {
    return new Promise((resolve, reject) => {
        switch (dato) {
            case 'usuario':
                setTimeout(() => {
                    resolve('usuario cargado')
                    
                }, 2000);
                break;


            case 'producto' :
                setTimeout(() => {
                    resolve('producto cargado')
                    
                }, 4000);
            break;


            case 'orden' :
                setTimeout(() => {
                    resolve('orden cargado')
                    
                }, 6000);
            break;


            default:
                reject(`dato ${dato} no se pudo cargar`)
                break;
        }
    }) 
}




Promise.all([
    realiceDatos('usuario'),
    realiceDatos('producto'),
    realiceDatos('orden'),
    // realiceDatos('oden') descomentar para ver el catch.error
]).then((resultados) => {
    console.log(resultados); //este console.log imprime todos mis resolve
})
.catch((error) => {
    console.error(error);
});