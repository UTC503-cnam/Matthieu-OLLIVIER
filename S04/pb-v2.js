function defaultSiNulNumber(x, defaut) {
    if (x == null) {
        return defaut;
    }
    else {
        return x;
    }
}
function defaultSiNulString(x, defaut) {
    if (x == null) {
        return defaut;
    }
    else {
        return x;
    }
}
var maValeurParDefaut = "Quatre";
var maValeur = "Un";
console.log(defaultSiNulString(maValeur, maValeurParDefaut));
maValeur = null;
console.log(defaultSiNulString(maValeur, maValeurParDefaut));
