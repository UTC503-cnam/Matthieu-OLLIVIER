let numbers = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste
let minimum = numbers.reduce((accumulator, currentvalue) => currentvalue < accumulator ? currentvalue:accumulator, numbers [0]);// ...
let maximum = numbers.reduce((accumulator, currentvalue) => currentvalue > accumulator ? currentvalue:accumulator, numbers [0]);// ...
console.log(`Min is ${minimum}, max is ${maximum}`);