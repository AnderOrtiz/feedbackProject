const arr = ["c", "a", "b"],
    toSortedArr = arr.toSorted(),
    toReversedArr = arr.toReversed();

// nuevoArray = array.toSpliced(start, deleteCount, ...items)


const newArr = arr.toSpliced(1,2) // desde el index 1 borra 2 elementos
const newArr1 = arr.toSpliced(1,1, 'z') // remplaza el index 1 con 'z'
const newArr2 = arr.toSpliced(1,0,'x') //agrega el elemento 'x'

console.log(newArr);
console.log(newArr1);
console.log(newArr2);

/**
 * 🧩 Ejercicio 8 – Arrays inmutables (JS)

Crea un array de strings desordenado.

Usa .toSorted() para ordenarlo sin mutar el original.

Usa .toReversed() y .toSpliced() para practicar.

👉 Meta: entender cómo trabajar sin mutar el array original.

 */