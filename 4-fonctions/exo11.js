var readline = require("readline-sync");
menu();
var choix = readline.questionInt("Quel est votre choix ? ");
var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
let result = 1;
let resultat = 0;


switch(choix) {
    case 1 : function factorielle(nombre) {
        for(let i = 1; i <= nombre; i++) {
            result*=i
        }
        console.log("Le resultat de ! " + nombre + " est : " + result)
    }; 
    break;
    case 2 :  
    break;
    case 3 : console.log("A+");
}

function menu() {
    console.log("*****************");
    console.log("1/ Factorielle\n2/ Somme\n3/ Quitter");
    console.log("*****************");
}


factorielle(nombre); 
function somme(nombre) {
    for(let i = 0; i <= nombre; i++){
        resultat= resultat + i; 
    }
    console.log("Le resultat de la somme des " + nombre + " premiers nombre est : "+ resultat);
}
