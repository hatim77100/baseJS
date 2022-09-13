const readline = require("readline-sync");
const age = readline.questionInt("quel est votre age ? ");
const taille = readline.questionInt("Quel est votre taille ? ");
const residence = readline.question("Dans quel pays residez-vous ? ");

if(age >= 16 && taille > 160 && (residence === "france" || residence === "France")) {
    console.log("vous etes apte");
}else {
    console.log("vous etes inapte");
}