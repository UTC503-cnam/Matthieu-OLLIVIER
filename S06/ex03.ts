function maximize (max:number){
    return function(valeur:number){
        return valeur > max ? max : valeur
    }
}

let maximize_lambda = m => v => v > m ? m : v;

let maximize_2 = maximize(2);
let maximize_3 = maximize_lambda(3) ;

console.log(maximize_2(8));
console.log(maximize_3(10));