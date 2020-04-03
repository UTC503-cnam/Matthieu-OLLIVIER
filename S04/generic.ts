function generics<T>(data :T) {
    return data;
}

console.log(generics<number>(2));
console.log(generics<number>(3));
console.log(generics<string>("this"));

