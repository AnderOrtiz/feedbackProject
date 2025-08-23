const promesa = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr) {
            setTimeout(() => {
            resolve()
            console.log('operación completada')
        }, 2000);
        } else {
            reject("Hubo un error")
        }
    })
}


promesa(true)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error)
    })


/**⚡ Ejercicio 4 – Promesas (JS)

Crea una función que:

Devuelva una promesa que tarde 2 segundos en resolverse con el mensaje "Operación completada".

Maneja el resultado con .then() y captura errores con .catch().

👉 Meta: comprender promesas básicas. */