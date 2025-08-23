function procesarDato(num, callback) {
    if (num % 2 == 0){
        callback('Es par', num)
    }else{
        callback(false, num)
    }
}

const callback = (isPar, num) => {
    if (!isPar) {
        console.error(`El número ${num} es impar`);
    } else {
        num = num**2
        console.log(`El número ${num} es par!!`);
    }
}

procesarDato(3, callback);

/** ⏳ Ejercicio 3 – Callbacks (JS)

Crea una función procesarDato que:

Reciba un número y un callback.

Si el número es par, ejecuta el callback con el número al cuadrado.

Si es impar, ejecuta el callback y maneje el error. 

👉 Meta: practicar funciones como parámetros. */