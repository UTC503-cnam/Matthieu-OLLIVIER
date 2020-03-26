var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZooAnimal6 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal6(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal6.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal6.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal6.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal6;
}());
var ZooDauphin6 = /** @class */ (function (_super) {
    __extends(ZooDauphin6, _super);
    function ZooDauphin6(nom, age, poids, poissonPrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.poissonPrefere = poissonPrefere;
        return _this;
    }
    ZooDauphin6.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Son poisson préféré est " + this.poissonPrefere + ".";
        return etat;
    };
    return ZooDauphin6;
}(ZooAnimal6));
var ZooPanda6 = /** @class */ (function (_super) {
    __extends(ZooPanda6, _super);
    function ZooPanda6(nom, age, poids, plantePrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.plantePrefere = plantePrefere;
        return _this;
    }
    ZooPanda6.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Sa plante préféré est " + this.plantePrefere + ".";
        return etat;
    };
    return ZooPanda6;
}(ZooAnimal6));
var flipper6 = new ZooDauphin6("Flipper", 30, 150, "hareng");
var oum6 = new ZooDauphin6("Oum", 20, 100, "sardine");
var pandi6 = new ZooPanda6("Pandi", 10, 80, "bambou");
flipper6.nouvelleJournee();
pandi6.nouvelleJournee();
oum6.nouvelleJournee();
flipper6.recoitNourriture(10);
pandi6.recoitNourriture(10);
flipper6.recoitNourriture(25);
oum6.recoitNourriture(30);
console.log(flipper6.etatAlimentation());
console.log(oum6.etatAlimentation());
console.log(pandi6.etatAlimentation());
