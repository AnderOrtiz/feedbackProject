class Persona {
    static porObjeto ({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`${this.nombre}\n${this.apellido}\n${this.pais}`)
    }
}

const fh = {
    "nombre": "Fernando",
    "apellido": "Herrera",
    "pais": "Costa Rica"
}

const persona1 = new Persona("Ander","Ortiz","El Salvador")
const persona2 = Persona.porObjeto(fh)

persona1.getInfo()
persona2.getInfo()


/*🎛️ Ejercicio 2 – Controladores Múltiples (JS)

Crea un pequeño index.html con un botón.

Agrega dos controladores diferentes al evento click del botón.

Uno debe mostrar un mensaje en consola, y el otro debe cambiar el texto del botón.

👉 Meta: manejar controladores múltiples.*/