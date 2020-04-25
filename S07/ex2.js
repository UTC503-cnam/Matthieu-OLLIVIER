var list = [1, 9, 2, 8, 5];
var nombrePair = function (n) { return n % 2 == 0; };
var and = function (funct1) { return function (funct2) { return function (n) { return funct1(n) && funct2(n); }; }; }; // Ecrivez la fonction 'and' sous sa forme curryfiée qui permet au code ci-dessous de fonctionner
var result = list.filter(and(nombrePair)(function (n) { return n > 4; }));
console.log(result); // [8]
//# sourceMappingURL=ex2.js.map