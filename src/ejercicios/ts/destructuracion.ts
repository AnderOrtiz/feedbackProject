(()=>{
    interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    address: Address;
}

interface Address {
    ciudad: string;
    pais: string;
}

const ander: Usuario = {
    id: 1,
    nombre: 'Andero',
    edad: 19,
    address: {
        ciudad: 'Ciudad Barrios',
        pais: 'El Salvador'
    }
}

const edad:number = ander.edad;
console.log(`${edad}`);

const colores:string[] = ['Negro', 'Verde'];
const [color1, color2, color3 = 'sin color'] = colores
console.log({color1,color2, color3});

const numeros: number[] = [10, 20, 30, 40, 50];

console.log(numeros.at(0));  
console.log(numeros.at(2));  
console.log(numeros.at(-1)); 
console.log(numeros.at(-2));


console.log(colores?.[0]); 
console.log(colores?.[1]); 
console.log(colores?.[5]);

const sinColores: string[] | null = null;

console.log(sinColores?.[0]); // undefined (en vez de error)


})()