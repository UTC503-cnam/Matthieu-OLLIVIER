abstract class ZooAnimal10 {
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

class ZooDauphin10 extends ZooAnimal10 {
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
class ZooPanda10 extends ZooAnimal10 {
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

let flipper10 = new ZooDauphin10("Flipper", 30, 150, "hareng");
let oum10 = new ZooDauphin10("Oum", 20, 100, "sardine");
let pandi10 = new ZooPanda10("Pandi", 10, 80, "bambou");

let lesZanimaux : ZooAnimal10[] = [flipper10, oum10, pandi10];

for(let unAnimal of lesZanimaux){
    unAnimal.nouvelleJournee();
}

flipper10.recoitNourriture(10) ;
pandi10.recoitNourriture(10) ;
flipper10.recoitNourriture(25) ;
oum10.recoitNourriture(15) ;

for(let unAnimal of lesZanimaux){
    console.log(unAnimal.etatAlimentation());
}

