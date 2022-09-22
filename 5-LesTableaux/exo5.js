var readline = require("readline-sync");
var tableau = [4, 8, 12, 16];
var choix = -1;

function menu() {
  let txt = "1/ Afficher le tableau\n";
  txt += "2/ Calculer la moyenne\n";
  txt += "3/ Sortir";
  return txt;
}

function afficherTableau(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    console.log("indice : " + i + " - Valeur : " + tableau[i]);
  }
}

function moyenneTableau(tableau) {
  let resultat = 0;
  for (let i = 0; i < tableau.length; i++) {
    resultat += tableau[i];
  }
  return (Math.round(resultat / tableau.length) * 10) / 10;
}
while (choix !== 3) {
  console.log(menu());
  choix = readline.questionInt("Quel est votre choix ? ");

  switch (choix) {
    case 1:
      afficherTableau(tableau);
      break;
    case 2:
      console.log("La moyenne est de " + moyenneTableau(tableau));
      break;
    case 3:
      console.log("A +");
      break;
    default:
      console.log("Cas non traité");
  }
}
