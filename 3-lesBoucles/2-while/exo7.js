var readline = require("readline-sync");
var saisie = "";

while ((saisie < 1 || saisie >5)) {
   saisie = readline.question("Veuiller saisir un chiffre entre 1 et 5 : ");
}; // je sors quand saisie >= 1 && saisie >= 5 --->  1<= saisie <=5
console.log("vous avez saisi : "+ saisie);

