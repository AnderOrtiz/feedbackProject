const realiceDatos = (dato) => {
    return new Promise((resolve, reject) => {
        switch (dato.tipo) {
            case 'usuario':
                setTimeout(() => {
                    resolve(`${dato.tipo}, ${dato.nombre}, ${dato.valor} cargado`)

                }, 2000);
                break;


            case 'producto':
                setTimeout(() => {
                    resolve(`${dato.tipo}, ${dato.nombre}, ${dato.valor} cargado`)

                }, 3000);
                break;


            case 'orden':
                setTimeout(() => {
                    resolve(`${dato.tipo}, ${dato.nombre}, ${dato.valor} cargado`)
                }, 4000);
                break;


            default:
                setTimeout(() => {
                    reject(`dato ${dato.tipo} no se pudo cargar`)
                }, 3000);
                break;
        }
    })
}

const datos = [
    { tipo: 'usuario', nombre: 'Ander', valor: 20 },
    { tipo: 'producto', nombre: 'Camiseta', valor: 22 },
    { tipo: 'orden', nombre: 123, valor: 2 },
    { tipo: 'invalido', nombre: '???', valor: 0 }
];


const promesas = datos.map((promesa) => realiceDatos(promesa))


Promise.allSettled(promesas)
    .then((resultado) => {

        const exitos = resultado.filter((res) => res.status === 'fulfilled');
        const fallidos = resultado.filter((res) => res.status === 'rejected');

        console.log('--Resusltados exitosos--');
        exitos.forEach((res) => {
            console.log(res.value);
        })
        
        console.log('--Resultados fallidos--');
        fallidos.forEach((res) => {
            console.log(res.reason);
            
        })


    })