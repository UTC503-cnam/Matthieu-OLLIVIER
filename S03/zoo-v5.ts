class ZooAnimal5 {
    // Attributs
    nom : string;  // ajout de private pour éviter modification extérieur (intégrite)
    age: number;
    poids: number;
    quantiteNourritureTotale: number;
    bienNourri: boolean;
    // Constructeur
    constructor (nom: string, age: number, poids: number) {
        this.nom = nom;
        this.age = age ;
        this.poids = poids ;
        this.quantiteNourritureTotale = 0 ;
        this.bienNourri = false ;
    }
}

class ZooDauphin5 extends ZooAnimal5 {
    poissonPrefere: string ;

    constructor(nom: string, age: number, poids: number, poissonPrefere: string){
        super(nom, age, poids);
        this.poissonPrefere = poissonPrefere;
    }
}
class ZooPanda5 extends ZooAnimal5 {
    plantePrefere: string ;

    constructor(nom: string, age: number, poids: number, plantePrefere: string){
        super(nom, age, poids);
        this.plantePrefere = plantePrefere;
    }
}

let flipper5 = new ZooDauphin5("Flipper", 30, 150, "hareng");
let oum5 = new ZooDauphin5("Oum", 20, 100, "sardine");
let pandi5 = new ZooPanda5("Pandi", 10, 80, "bambou");

console.log(flipper5.nom + " " + flipper5.poissonPrefere);
console.log(oum5.nom + " " + oum5.poissonPrefere);
console.log(pandi5.nom + " " + pandi5.plantePrefere);
