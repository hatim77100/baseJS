var readline = require("readline-sync");
// menu();
// var choix = readline.questionInt("Quel est votre choix ? ");
// var nombre = readline.questionInt("Quel nombre voulez-vous ? ");

// function menu() {
//     console.log("*****************");
//     console.log("1/ Factorielle\n2/ Somme\n3/Quitter");
//     console.log("*****************");
// }
let result = 1;
function factorielle(factor) {
    for(let i = 1; i <= factor; i++) {
        result*=i
    }
    console.log(result);
}
factorielle(5); 