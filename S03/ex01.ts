abstract class Figure {
    // Attributs
    protected longueur1 : number;  
        
    constructor (longueur1: number) {
        this.longueur1 = longueur1;
    }
    abstract rapport();
}
class Triangle extends Figure {
    constructor(longueur1: number){
        super(longueur1);
    }
    rapport(){
        return "Cette figure est un triangle de coté " + this.longueur1 + ", de périmètre " + 3*this.longueur1 + ", et d'aire " + (Math.sqrt(3) / 4)*Math.pow(this.longueur1, 2);
    };
}
class Losange extends Figure {
    protected longueur2: number;
    constructor(longueur1: number, longueur2: number){
        super(longueur1);
        this.longueur2 = longueur2;
    }
    rapport(){
        let typedeFigure : String;
        if (this.longueur1 == this.longueur2){
        typedeFigure = "losange";
        } else {
            typedeFigure = "carré";
        }
        return "Cette figure est un " + typedeFigure + " de cotés " + this.longueur1 + " et " + this.longueur2 + ", de périmètre " + 2*(this.longueur1 + this.longueur2) + ", et d'aire " + 2*(this.longueur1 * this.longueur2)
    };
}

let t1 = new Triangle(5) ;
let t2 = new Triangle(10) ;
let l1 = new Losange(5,6);
let l2 = new Losange(4,4);

let figures:Figure[] = [t1, t2, l1, l2];
for(let f of figures){
    console.log(f.rapport());
}