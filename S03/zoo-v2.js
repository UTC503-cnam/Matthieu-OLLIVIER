var ZooAnimal2 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal2(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal2.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal2.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal2.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal2;
}());
// Création d'instances de classes: objets
var flipper2 = new ZooAnimal2("Flipper", 30, 150);
var pandi2 = new ZooAnimal2("Pandi", 10, 80);
// Appels de méthodes sur les objets
flipper2.nouvelleJournee();
pandi2.nouvelleJournee();
flipper2.recoitNourriture(10);
pandi2.recoitNourriture(10);
flipper2.recoitNourriture(25);
console.log(flipper2.etatAlimentation());
console.log(pandi2.etatAlimentation());
