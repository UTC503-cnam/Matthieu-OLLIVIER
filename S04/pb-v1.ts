function defaultSiNul(x: number, defaut:number) {
    if (x == null){
    return defaut ;}
    else {
    return x;}
}

let maValeurParDefaut = 4;
let maValeur = 1;
console.log(defaultSiNul(maValeur, maValeurParDefaut));
maValeur = null;
console.log(defaultSiNul(maValeur, maValeurParDefaut));
