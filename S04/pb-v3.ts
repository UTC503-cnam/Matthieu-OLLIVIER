function defaultSiNul(x: any, defaut:any) {
    if (x == null){
    return defaut ;}
    else {
    return x;}
}

}
let maValeurParDefaut = 4;
let maValeur = 1;
let r: number = defaultSiNul(maValeur, maValeurParDefaut);
console.log(r);

let maValeur2 = "Deux";
r = defaultSiNul(maValeur2, maValeurParDefaut);
console.log(r);
