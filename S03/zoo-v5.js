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
var ZooAnimal5 = /** @class */ (function () {
    // Constructeur
    function ZooAnimal5(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    return ZooAnimal5;
}());
var ZooDauphin5 = /** @class */ (function (_super) {
    __extends(ZooDauphin5, _super);
    function ZooDauphin5(nom, age, poids, poissonPrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.poissonPrefere = poissonPrefere;
        return _this;
    }
    return ZooDauphin5;
}(ZooAnimal5));
var ZooPanda5 = /** @class */ (function (_super) {
    __extends(ZooPanda5, _super);
    function ZooPanda5(nom, age, poids, plantePrefere) {
        var _this = _super.call(this, nom, age, poids) || this;
        _this.plantePrefere = plantePrefere;
        return _this;
    }
    return ZooPanda5;
}(ZooAnimal5));
var flipper5 = new ZooDauphin5("Flipper", 30, 150, "hareng");
var oum5 = new ZooDauphin5("Oum", 20, 100, "sardine");
var pandi5 = new ZooPanda5("Pandi", 10, 80, "bambou");
console.log(flipper5.nom + " " + flipper5.poissonPrefere);
console.log(oum5.nom + " " + oum5.poissonPrefere);
console.log(pandi5.nom + " " + pandi5.plantePrefere);
