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
var ZooAnimal8 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal8(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal8.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal8.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal8.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal8;
}());
var ZooDauphin8 = /** @class */ (function (_super) {
    __extends(ZooDauphin8, _super);
    function ZooDauphin8(nom, age, poids, poissonPrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.poissonPrefere = poissonPrefere;
        return _this;
    }
    ZooDauphin8.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Son poisson préféré est " + this.poissonPrefere + ".";
        return etat;
    };
    ZooDauphin8.prototype.calculeBienNourri = function () {
        return this.quantiteNourritureTotale > this.poids / 8;
    };
    return ZooDauphin8;
}(ZooAnimal8));
var ZooPanda8 = /** @class */ (function (_super) {
    __extends(ZooPanda8, _super);
    function ZooPanda8(nom, age, poids, plantePrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.plantePrefere = plantePrefere;
        return _this;
    }
    ZooPanda8.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Sa plante préféré est " + this.plantePrefere + ".";
        return etat;
    };
    ZooPanda8.prototype.calculeBienNourri = function () {
        return this.quantiteNourritureTotale > (this.poids / 4 - this.age / 10);
    };
    return ZooPanda8;
}(ZooAnimal8));
var flipper8 = new ZooDauphin8("Flipper", 30, 150, "hareng");
var oum8 = new ZooDauphin8("Oum", 20, 100, "sardine");
var pandi8 = new ZooPanda8("Pandi", 10, 80, "bambou");
flipper8.nouvelleJournee();
pandi8.nouvelleJournee();
oum8.nouvelleJournee();
flipper8.recoitNourriture(10);
pandi8.recoitNourriture(10);
flipper8.recoitNourriture(25);
oum8.recoitNourriture(30);
console.log(flipper8.etatAlimentation());
console.log(oum8.etatAlimentation());
console.log(pandi8.etatAlimentation());
