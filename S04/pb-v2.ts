function defaultSiNulNumber(x: number, defaut:number) {
    if (x == null){
    return defaut ;}
    else {
    return x;}
}
function defaultSiNulString(x: string, defaut:string) {
    if (x == null){
    return defaut ;}
    else {
    return x;}
}
let maValeurParDefaut = "Quatre";
let maValeur = "Un";
console.log(defaultSiNulString(maValeur, maValeurParDefaut));
maValeur = null;
console.log(defaultSiNulString(maValeur, maValeurParDefaut));