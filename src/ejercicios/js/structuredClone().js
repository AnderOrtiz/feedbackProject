const usuario = {
    id: 1,
    nombre: "Anderson",
    direccion: {
        ciudad: "San Salvador",
        codigoPostal: "1101"
    },
    hobbies: ["programar", "ajedrez", "piano"],
    redes: {
        github: "anderortiz",
        twitter: "@ander"
    }
};


const useredited = structuredClone(usuario)

useredited.direccion.ciudad = "San Miguel";
useredited.hobbies.push = "Gamer";
useredited.redes.github = "ander-ipynb"




console.log(usuario);
console.log(useredited);

/**
🌀 Ejercicio 7 – structuredClone() (JS)

Crea un objeto con propiedades anidadas.

Haz una copia con structuredClone.

Modifica la copia y verifica que el original no cambió.

👉 Meta: entender copia profunda vs copia por referencia.
 */