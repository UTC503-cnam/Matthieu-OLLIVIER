class ZooAnimal3 {
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
    getNom() {
        return this.nom ;
    }
    setNom(nouveauNom: string) {
        if (nouveauNom == null || nouveauNom.trim().length ==0) {
            console.log("Erreur: le nouveau nom n'est pas correct");
            return ;
        }
        this.nom = nouveauNom;
    }
}
// Création d'instances de classes: objets
let flipper3 = new ZooAnimal3 ("Flipper", 30, 150);
let pandi3 = new ZooAnimal3 ("Pandi", 10, 80);

// Appels de méthodes sur les objets
flipper3.nouvelleJournee() ;
pandi3.nouvelleJournee() ;
flipper3.recoitNourriture(10) ;
pandi3.recoitNourriture(10) ;
flipper3.recoitNourriture(25) ;

flipper3.setNom("Flipper Junior");


console.log(flipper3.etatAlimentation()) ;
console.log(pandi3.etatAlimentation()) ;


