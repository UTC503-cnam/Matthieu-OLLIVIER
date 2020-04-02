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
console.log(defaultSiNul(maValeur, maValeurParDefaut));
maValeur = null;
console.log(defaultSiNul(maValeur, maValeurParDefaut));
