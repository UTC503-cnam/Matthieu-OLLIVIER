function defaultSiNul<T>(x: T, defaut:T) {
    if (x == null){
    return defaut ;}
    else {
    return x;}
}


let nombreParDefaut = 4;
let nombre = 1;
let nombreRes: number = defaultSiNul(nombre, nombreParDefaut);
console.log(nombreRes);
let chaineParDefaut = "Quatre";
let chaine = "Un";
let chaineRes: string = defaultSiNul(chaine, chaineParDefaut);
console.log(chaineRes);

