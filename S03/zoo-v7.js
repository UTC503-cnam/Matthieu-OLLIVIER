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
var ZooAnimal7 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal7(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal7.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal7.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal7.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal7;
}());
var ZooDauphin7 = /** @class */ (function (_super) {
    __extends(ZooDauphin7, _super);
    function ZooDauphin7(nom, age, poids, poissonPrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.poissonPrefere = poissonPrefere;
        return _this;
    }
    ZooDauphin7.prototype.etatAlimentation = function () {
        return _super.prototype.etatAlimentation.call(this) + " Son poisson préféré est " + this.poissonPrefere + ".";
    };
    return ZooDauphin7;
}(ZooAnimal7));
var ZooPanda7 = /** @class */ (function (_super) {
    __extends(ZooPanda7, _super);
    function ZooPanda7(nom, age, poids, plantePrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.plantePrefere = plantePrefere;
        return _this;
    }
    ZooPanda7.prototype.etatAlimentation = function () {
        return _super.prototype.etatAlimentation.call(this) + " Sa plante préféré est " + this.plantePrefere + ".";
    };
    return ZooPanda7;
}(ZooAnimal7));
var flipper7 = new ZooDauphin7("Flipper", 30, 150, "hareng");
var oum7 = new ZooDauphin7("Oum", 20, 100, "sardine");
var pandi7 = new ZooPanda7("Pandi", 10, 80, "bambou");
flipper7.nouvelleJournee();
pandi7.nouvelleJournee();
oum7.nouvelleJournee();
flipper7.recoitNourriture(10);
pandi7.recoitNourriture(10);
flipper7.recoitNourriture(25);
oum7.recoitNourriture(30);
console.log(flipper7.etatAlimentation());
console.log(oum7.etatAlimentation());
console.log(pandi7.etatAlimentation());
