const 
    arr = [1, 2, 3, 4, 5],
    atIndex = arr.at(-2),
    newArr = arr.with(2,22);

console.log({atIndex}); // la forma mas elegante para buscar un elemento
console.log(arr); 
console.log(newArr); // para crear una copia del array, modificando un valor en una posición dada sin afectar el original