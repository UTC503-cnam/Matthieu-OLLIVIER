var Ruban = /** @class */ (function () {
    function Ruban(length) {
        this.length = length;
    }
    return Ruban;
}());
function selectionnePetit(element, limite) {
    return element.length < limite ? element : null;
}
var ruban = new Ruban(10);
var chaine = "myLengthIs12";
var petitRuban = selectionnePetit(ruban, 20);
var petiteChaine = selectionnePetit(chaine, 20);
console.log(petitRuban);
console.log(petiteChaine);
