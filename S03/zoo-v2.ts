class ZooAnimal2 {
    // Attributs
    private nom : string;  // ajout de private pour éviter modification extérieur (intégrite)
    private age: number;
    private poids: number;
    private quantiteNourritureTotale: number;
    private bienNourri: boolean;
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
// Création d'instances de classes: objets
let flipper2 = new ZooAnimal2 ("Flipper", 30, 150);
let pandi2 = new ZooAnimal2 ("Pandi", 10, 80);

// Appels de méthodes sur les objets
flipper2.nouvelleJournee() ;
pandi2.nouvelleJournee() ;
flipper2.recoitNourriture(10) ;
pandi2.recoitNourriture(10) ;
flipper2.recoitNourriture(25) ;
console.log(flipper2.etatAlimentation()) ;
console.log(pandi2.etatAlimentation()) ;


