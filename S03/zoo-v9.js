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
var ZooAnimal9 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal9(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal9.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal9.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal9.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal9;
}());
var ZooDauphin9 = /** @class */ (function (_super) {
    __extends(ZooDauphin9, _super);
    function ZooDauphin9(nom, age, poids, poissonPrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.poissonPrefere = poissonPrefere;
        return _this;
    }
    ZooDauphin9.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Son poisson préféré est " + this.poissonPrefere + ".";
        return etat;
    };
    ZooDauphin9.prototype.calculeBienNourri = function () {
        return this.quantiteNourritureTotale > this.poids / 8;
    };
    return ZooDauphin9;
}(ZooAnimal9));
var ZooPanda9 = /** @class */ (function (_super) {
    __extends(ZooPanda9, _super);
    function ZooPanda9(nom, age, poids, plantePrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.plantePrefere = plantePrefere;
        return _this;
    }
    ZooPanda9.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Sa plante préféré est " + this.plantePrefere + ".";
        return etat;
    };
    ZooPanda9.prototype.calculeBienNourri = function () {
        return this.quantiteNourritureTotale > (this.poids / 4 - this.age / 10);
    };
    return ZooPanda9;
}(ZooAnimal9));
var flipper9 = new ZooDauphin9("Flipper", 30, 150, "hareng");
var oum9 = new ZooDauphin9("Oum", 20, 100, "sardine");
var pandi9 = new ZooPanda9("Pandi", 10, 80, "bambou");
flipper9.nouvelleJournee();
pandi9.nouvelleJournee();
oum9.nouvelleJournee();
flipper9.recoitNourriture(10);
pandi9.recoitNourriture(10);
flipper9.recoitNourriture(25);
oum9.recoitNourriture(30);
console.log(flipper9.etatAlimentation());
console.log(oum9.etatAlimentation());
console.log(pandi9.etatAlimentation());
