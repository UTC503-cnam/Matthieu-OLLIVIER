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
var ZooAnimal10 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal10(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal10.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal10.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal10.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal10;
}());
var ZooDauphin10 = /** @class */ (function (_super) {
    __extends(ZooDauphin10, _super);
    function ZooDauphin10(nom, age, poids, poissonPrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.poissonPrefere = poissonPrefere;
        return _this;
    }
    ZooDauphin10.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Son poisson préféré est " + this.poissonPrefere + ".";
        return etat;
    };
    ZooDauphin10.prototype.calculeBienNourri = function () {
        return this.quantiteNourritureTotale > this.poids / 8;
    };
    return ZooDauphin10;
}(ZooAnimal10));
var ZooPanda10 = /** @class */ (function (_super) {
    __extends(ZooPanda10, _super);
    function ZooPanda10(nom, age, poids, plantePrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.plantePrefere = plantePrefere;
        return _this;
    }
    ZooPanda10.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. ";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        etat += " Sa plante préféré est " + this.plantePrefere + ".";
        return etat;
    };
    ZooPanda10.prototype.calculeBienNourri = function () {
        return this.quantiteNourritureTotale > (this.poids / 4 - this.age / 10);
    };
    return ZooPanda10;
}(ZooAnimal10));
var flipper10 = new ZooDauphin10("Flipper", 30, 150, "hareng");
var oum10 = new ZooDauphin10("Oum", 20, 100, "sardine");
var pandi10 = new ZooPanda10("Pandi", 10, 80, "bambou");
var lesZanimaux = [flipper10, oum10, pandi10];
for (var _i = 0, lesZanimaux_1 = lesZanimaux; _i < lesZanimaux_1.length; _i++) {
    var unAnimal = lesZanimaux_1[_i];
    unAnimal.nouvelleJournee();
}
flipper10.recoitNourriture(10);
pandi10.recoitNourriture(10);
flipper10.recoitNourriture(25);
oum10.recoitNourriture(15);
for (var _a = 0, lesZanimaux_2 = lesZanimaux; _a < lesZanimaux_2.length; _a++) {
    var unAnimal = lesZanimaux_2[_a];
    console.log(unAnimal.etatAlimentation());
}
