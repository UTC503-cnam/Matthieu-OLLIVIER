class ZooAnimal6 {
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

class ZooDauphin6 extends ZooAnimal6 {
    poissonPrefere: string ;

    constructor(nom: string, age: number, poids: number, poissonPrefere: string){
        super(nom, age, poids);
        this.poissonPrefere = poissonPrefere;
    }
}
class ZooPanda6 extends ZooAnimal6 {
    plantePrefere: string ;

    constructor(nom: string, age: number, poids: number, plantePrefere: string){
        super(nom, age, poids);
        this.plantePrefere = plantePrefere;
    }
}

let flipper6 = new ZooDauphin5("Flipper", 30, 150, "hareng");
let oum6 = new ZooDauphin5("Oum", 20, 100, "sardine");
let pandi6 = new ZooPanda5("Pandi", 10, 80, "bambou");

console.log(flipper6.nom + " " + flipper5.poissonPrefere);
console.log(oum6.nom + " " + oum5.poissonPrefere);
console.log(pandi6.nom + " " + pandi5.plantePrefere);
