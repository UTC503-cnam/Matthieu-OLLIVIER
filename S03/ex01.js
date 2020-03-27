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
var Figure = /** @class */ (function () {
    function Figure(longueur1) {
        this.longueur1 = longueur1;
    }
    return Figure;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(longueur1) {
        return _super.call(this, longueur1) || this;
    }
    Triangle.prototype.rapport = function () {
        return "Cette figure est un triangle de coté " + this.longueur1 + ", de périmètre " + 3 * this.longueur1 + ", et d'aire " + (Math.sqrt(3) / 4) * Math.pow(this.longueur1, 2);
    };
    ;
    return Triangle;
}(Figure));
var Losange = /** @class */ (function (_super) {
    __extends(Losange, _super);
    function Losange(longueur1, longueur2) {
        var _this = _super.call(this, longueur1) || this;
        _this.longueur2 = longueur2;
        return _this;
    }
    Losange.prototype.rapport = function () {
        var typedeFigure;
        if (this.longueur1 == this.longueur2) {
            typedeFigure = "losange";
        }
        else {
            typedeFigure = "carré";
        }
        return "Cette figure est un " + typedeFigure + " de cotés " + this.longueur1 + " et " + this.longueur2 + ", de périmètre " + 2 * (this.longueur1 + this.longueur2) + ", et d'aire " + 2 * (this.longueur1 * this.longueur2);
    };
    ;
    return Losange;
}(Figure));
var t1 = new Triangle(5);
var t2 = new Triangle(10);
var l1 = new Losange(5, 6);
var l2 = new Losange(4, 4);
var figures = [t1, t2, l1, l2];
for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
    var f = figures_1[_i];
    console.log(f.rapport());
}
