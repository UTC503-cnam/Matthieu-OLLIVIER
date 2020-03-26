class ZooAnimal7 {
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

class ZooDauphin7 extends ZooAnimal7 {
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
}
class ZooPanda7 extends ZooAnimal7 {
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
}

let flipper7 = new ZooDauphin7("Flipper", 30, 150, "hareng");
let oum7 = new ZooDauphin7("Oum", 20, 100, "sardine");
let pandi7 = new ZooPanda7("Pandi", 10, 80, "bambou");

flipper7.nouvelleJournee() ;
pandi7.nouvelleJournee() ;
oum7.nouvelleJournee()
flipper7.recoitNourriture(10) ;
pandi7.recoitNourriture(10) ;
flipper7.recoitNourriture(25) ;
oum7.recoitNourriture(30) ;

console.log(flipper7.etatAlimentation());
console.log(oum7.etatAlimentation());
console.log(pandi7.etatAlimentation());
