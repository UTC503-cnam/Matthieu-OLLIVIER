function defaultSiNul(x, defaut) {
    if (x == null) {
        return defaut;
    }
    else {
        return x;
    }
}
var nombreParDefaut = 4;
var nombre = 1;
var nombreRes = defaultSiNul(nombre, nombreParDefaut);
console.log(nombreRes);
var chaineParDefaut = "Quatre";
var chaine = "Un";
var chaineRes = defaultSiNul(chaine, chaineParDefaut);
console.log(chaineRes);
chaineRes = defaultSiNul(chaine, chaineParDefaut);
