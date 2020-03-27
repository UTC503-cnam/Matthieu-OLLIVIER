abstract class ZooAnimal8 {
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

    // Méthodes
    nouvelleJournee () {
        this.quantiteNourritureTotale = 0 ;
        this.bienNourri = false ;
    }
    abstract calculeBienNourri();
    
    recoitNourriture (quantite: number) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids /5)) {
            this.bienNourri = true ;
        } else {
            this.bienNourri = false ;
        }
    }
    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. "
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri." ;
        }
       return etat ;
    }
    
}

class ZooDauphin8 extends ZooAnimal8 {
    poissonPrefere: string ;

    constructor(nom: string, age: number, poids: number, poissonPrefere: string){
        super(nom, age, poids);
        this.poissonPrefere = poissonPrefere;
    }
    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. "
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri." ;
        }
        etat += " Son poisson préféré est " + this.poissonPrefere + "." ;
       return etat ;
    }
    calculeBienNourri(){
        return this.quantiteNourritureTotale > this.poids / 8 ;
    }
}
class ZooPanda8 extends ZooAnimal8 {
    plantePrefere: string ;

    constructor(nom: string, age: number, poids: number, plantePrefere: string){
        super(nom, age, poids);
        this.plantePrefere = plantePrefere;
    }
    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture. "
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri." ;
        }
        etat += " Sa plante préféré est " + this.plantePrefere + "." ;
       return etat ;
    }
    calculeBienNourri(){
        return this.quantiteNourritureTotale > (this.poids / 4 - this.age / 10) ;
    }
}

let flipper8 = new ZooDauphin8("Flipper", 30, 150, "hareng");
let oum8 = new ZooDauphin8("Oum", 20, 100, "sardine");
let pandi8 = new ZooPanda8("Pandi", 10, 80, "bambou");

flipper8.nouvelleJournee() ;
pandi8.nouvelleJournee() ;
oum8.nouvelleJournee()
flipper8.recoitNourriture(10) ;
pandi8.recoitNourriture(10) ;
flipper8.recoitNourriture(25) ;
oum8.recoitNourriture(30) ;

console.log(flipper8.etatAlimentation());
console.log(oum8.etatAlimentation());
console.log(pandi8.etatAlimentation());
