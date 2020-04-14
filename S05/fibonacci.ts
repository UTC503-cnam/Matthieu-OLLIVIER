interface Iterateur<T>{
    aUnSuivant(): boolean;
    suivant(): T;
}

class Fibonacci implements Iterateur<number> {
    // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)
    nb_max : number;
    nb_current : number;
    nb_min1 : number;
    nb_min2 : number;
 

    constructor ( nb_max : number){
        this.nb_max = nb_max;
        this.nb_current = 0;
        this.nb_min1 = 0;
        this.nb_min2 = 1;
    }

    aUnSuivant () : boolean {
        return this.nb_current < this.nb_max ;
    }

    suivant () : number {
        let valeur : number;
        if (this.nb_current < 2){
            valeur = this.nb_current;
                     
        }
        else {
            valeur = this.nb_min1 + this.nb_min2;
            this.nb_min1 = this.nb_min2;
            this.nb_min2 = valeur;

        }
        this.nb_current ++  ;
        return valeur;
    }
}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let f = new Fibonacci(10); // (**)
while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
