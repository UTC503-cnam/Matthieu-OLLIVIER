function maximize(max) {
    return function (valeur) {
        return valeur > max ? max : valeur;
    };
}
var maximize_lambda = function (m) { return function (v) { return v > m ? m : v; }; };
var maximize_2 = maximize(2);
var maximize_3 = maximize_lambda(3);
console.log(maximize_2(8));
console.log(maximize_3(10));
//# sourceMappingURL=ex03.js.map