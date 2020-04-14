var Fibonacci = /** @class */ (function () {
    function Fibonacci(nb_max) {
        this.nb_max = nb_max;
        this.nb_current = 0;
        this.nb_min1 = 0;
        this.nb_min2 = 1;
    }
    Fibonacci.prototype.aUnSuivant = function () {
        return this.nb_current < this.nb_max;
    };
    Fibonacci.prototype.suivant = function () {
        var valeur;
        if (this.nb_current < 2) {
            valeur = this.nb_current;
        }
        else {
            valeur = this.nb_min1 + this.nb_min2;
            this.nb_min1 = this.nb_min2;
            this.nb_min2 = valeur;
        }
        this.nb_current++;
        return valeur;
    };
    return Fibonacci;
}());
// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
var f = new Fibonacci(10); // (**)
while (f.aUnSuivant()) {
    console.log(f.suivant() + ",");
}
// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
//# sourceMappingURL=fibonacci.js.map