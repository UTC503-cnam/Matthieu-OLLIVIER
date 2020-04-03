class CompteurAccess<T> {
    private compteur: number;
    private x: T;

    constructor(x: T){
        this.x = x;
        this.compteur = 0;
    }

    getX(): T {
        this.compteur ++;
        return this.x;
    }

    getCompteur(): number {
        return this.compteur;
    }
}

let nombre : number = 1234;
let chaine : string = "Tout va bien";

let compteurAccessChaine = new CompteurAccess(chaine);
let compteurAccessNombre = new CompteurAccess(nombre);



