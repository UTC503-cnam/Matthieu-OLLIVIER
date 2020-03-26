var ZooAnimal3 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal3(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal3.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal3.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal3.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    ZooAnimal3.prototype.getNom = function () {
        return this.nom;
    };
    ZooAnimal3.prototype.setNom = function (nouveauNom) {
        if (nouveauNom == null || nouveauNom.trim().length == 0) {
            console.log("Erreur: le nouveau nom n'est pas correct");
            return;
        }
        this.nom = nouveauNom;
    };
    return ZooAnimal3;
}());
// Création d'instances de classes: objets
var flipper3 = new ZooAnimal3("Flipper", 30, 150);
var pandi3 = new ZooAnimal3("Pandi", 10, 80);
// Appels de méthodes sur les objets
flipper3.nouvelleJournee();
pandi3.nouvelleJournee();
flipper3.recoitNourriture(10);
pandi3.recoitNourriture(10);
flipper3.recoitNourriture(25);
flipper3.setNom("Flipper Junior");
console.log(flipper3.etatAlimentation());
console.log(pandi3.etatAlimentation());
