const realiceDatos = (dato, nombre, valor) => {
    return new Promise((resolve, reject) => {
        switch (dato) {
            case 'usuario':
                setTimeout(() => {
                    resolve(`${dato}, ${nombre}, ${valor} cargado`)
                    
                }, 2000);
                break;


            case 'producto' :
                setTimeout(() => {
                    resolve(`${dato}, ${nombre}, ${valor} cargado`)
                    
                }, 3000);
            break;


            case 'orden' :
                setTimeout(() => {
                    resolve(`${dato}, ${nombre}, ${valor} cargado`)
                }, 4000);
            break;


            default:
                setTimeout(() => {
                    reject(`dato ${dato} no se pudo cargar`)
                }, 3000);
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