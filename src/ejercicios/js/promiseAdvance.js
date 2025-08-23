const realiceDatos = (dato) => {
    return new Promise((resolve, reject) => {
        switch (dato.valor) {
            case 'usuario':
                setTimeout(() => {
                    resolve(`${dato}, ${nombre}, ${valor} cargado`)

                }, 2000);
                break;


            case 'producto':
                setTimeout(() => {
                    resolve(`${dato}, ${nombre}, ${valor} cargado`)

                }, 3000);
                break;


            case 'orden':
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

const datos = [
    { tipo: 'usuario', nombre: 'Ander', valor: 20 },
    { tipo: 'producto', nombre: 'Camiseta', valor: 22 },
    { tipo: 'orden', nombre: 123, valor: 2 }
];



Promise.all([
    realiceDatos('usuario', 'Ander', 20),
    realiceDatos('producto', 'Camiseta', 22),
    realiceDatos('orden', 123, 2),
    // realiceDatos('oden') descomentar para ver el catch.error
]).then((resultados) => {
    console.log(resultados); //este console.log imprime todos mis resolve
})
    .catch((error) => {
        console.error(error);
    });