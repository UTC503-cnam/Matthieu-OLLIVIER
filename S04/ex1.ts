interface Mesurable {
    length: number;
}

class Trajet implements Mesurable {
    private nom: string;
    length: number;
    
    constructor(nom: string, length : number ){
        this.nom = nom;
        this.length = length;
    }
    
    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

class MinMax <T extends Mesurable> {
    

    constructor(t: Array<T>){
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array<T>){
        for(let e of t){

        }
    }

    getMin(): {

    }

    getMax(): {

    }
}

let trajets: Array<Trajet> = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
let trajetMinMax = 
console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array<string> = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = 
console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

// Replace console.log by alert when run on TypeScript Playground