var numbers = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste
var minimum = numbers.reduce(function (accumulator, currentvalue) { return currentvalue < accumulator ? currentvalue : accumulator; }, numbers[0]); // ...
var maximum = numbers.reduce(function (accumulator, currentvalue) { return currentvalue > accumulator ? currentvalue : accumulator; }, numbers[0]); // ...
console.log("Min is " + minimum + ", max is " + maximum);
//# sourceMappingURL=ex4.js.map