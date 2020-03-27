abstract class ZooAnimal9 {
    // Attributs
    protected nom : string;  // ajout de private pour éviter modification extérieur (intégrite)
    protected age: number;
    protected poids: number;
    protected quantiteNourritureTotale: number;
    protected bienNourri: boolean;
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
    protected abstract calculeBienNourri();
    
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

class ZooDauphin9 extends ZooAnimal9 {
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
class ZooPanda9 extends ZooAnimal9 {
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

let flipper9 = new ZooDauphin9("Flipper", 30, 150, "hareng");
let oum9 = new ZooDauphin9("Oum", 20, 100, "sardine");
let pandi9 = new ZooPanda9("Pandi", 10, 80, "bambou");

flipper9.nouvelleJournee() ;
pandi9.nouvelleJournee() ;
oum9.nouvelleJournee()
flipper9.recoitNourriture(10) ;
pandi9.recoitNourriture(10) ;
flipper9.recoitNourriture(25) ;
oum9.recoitNourriture(30) ;

console.log(flipper9.etatAlimentation());
console.log(oum9.etatAlimentation());
console.log(pandi9.etatAlimentation());
