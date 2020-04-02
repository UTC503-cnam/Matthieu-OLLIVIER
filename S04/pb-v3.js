function defaultSiNul(x, defaut) {
    if (x == null) {
        return defaut;
    }
    else {
        return x;
    }
}
var maValeurParDefaut = 4;
var maValeur = 1;
var r = defaultSiNul(maValeur, maValeurParDefaut);
console.log(r);
var maValeur2 = "Deux";
r = defaultSiNul(maValeur2, maValeurParDefaut);
console.log(r);
