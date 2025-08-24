// 1. Función de autenticación
const autenticacion = (usuario, contraseña) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === 'Ander' && contraseña === '1234') {
                resolve('Autenticación exitosa');
            } else {
                reject('Credenciales incorrectas');
            }
        }, 1000); // Simulamos que la autenticación tarda un segundo
    });
};

// 2. Función de carga de datos
const cargarDatos = (usuario) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === 'Ander') {
                resolve({ nombre: 'Ander', perfil: 'Desarrollador', edad: 25 });
            } else {
                reject('Datos no encontrados');
            }
        }, 2000); // Simulamos que cargar los datos toma más tiempo
    });
};

// 3. Función de acción adicional
const procesarDatos = (datos) => {
    return new Promise((resolve, reject) => {
        console.log(`Bienvenido, ${datos.nombre}. Tu perfil es ${datos.perfil}`);
        resolve('Datos procesados');
    });
};

// 4. Usamos Promise.race() para ver cuál promesa se resuelve primero
Promise.race([
    autenticacion('Ander', '1234'),
    cargarDatos('Ander')
])
    .then((resultado) => {
        console.log('¡Primera promesa resuelta!');
        console.log(resultado);  // Muestra el resultado de la promesa que se resolvió primero
        return cargarDatos('Ander'); // Cargar datos si la autenticación fue exitosa
    })
    .then((datosUsuario) => {
        return procesarDatos(datosUsuario);
    })
    .then((mensajeFinal) => {
        console.log(mensajeFinal);
    })
    .catch((error) => {
        console.error(error);
    });
