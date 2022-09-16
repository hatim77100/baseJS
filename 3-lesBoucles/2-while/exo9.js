var readline = require("readline-sync");
var menu = "1/ Bonjour\n2/ Salut\n3/ Coucou\n0/ Quitter";
var saisie = -1;

while (saisie !== 0) {
  console.log(menu);
  saisie = readline.questionInt("Veuillez saisir un chiffre entre 1 et 3 : ");
  switch (saisie) {
    case 1:
      console.log("Bonjour");
      break;
    case 2:
      console.log("Salut");
      break;
    case 3:
      console.log("Coucou");
      break;
    case 0:
      console.log("À bientôt");
      break;
    default:
      console.log("pas compris");
  }
}
