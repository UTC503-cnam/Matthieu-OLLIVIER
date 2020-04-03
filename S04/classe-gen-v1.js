var CompteurAccess = /** @class */ (function () {
    function CompteurAccess(x) {
        this.x = x;
        this.compteur = 0;
    }
    CompteurAccess.prototype.getX = function () {
        this.compteur++;
        return this.x;
    };
    CompteurAccess.prototype.getCompteur = function () {
        return this.compteur;
    };
    return CompteurAccess;
}());
var nombre = 1234;
var chaine = "Tout va bien";
var compteurAccessChaine = new CompteurAccess(chaine);
var compteurAccessNombre = new CompteurAccess(nombre);
compteurAccessChaine.getX();
compteurAccessChaine.getX();
compteurAccessNombre.getX();
compteurAccessNombre.getX();
compteurAccessNombre.getX();
compteurAccessNombre.getX();
console.log("La chaine " + chaine + " a \u00E9t\u00E9 vu : " + compteurAccessChaine.getCompteur() + " fois");
console.log("Le nombre " + nombre + " a \u00E9t\u00E9 vu : " + compteurAccessNombre.getCompteur() + " fois");
