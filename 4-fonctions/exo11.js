var readline = require("readline-sync");

while (choix !== 3) {
  menu();
  var choix = readline.questionInt("Quel est votre choix ? ");

  switch (choix) {
    case 1:
      var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
      factorielle(nombre);
      break;
    case 2:
      var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
      somme(nombre);
      break;
    case 3:
      console.log("A +");
      break;
    default:
      console.log("Je n'ai pas compris, réessayé");
  }
}

function menu() {
  console.log("*****************");
  console.log("1/ Factorielle\n2/ Somme\n3/ Quitter");
  console.log("*****************");
}

function factorielle(nombre) {
  let result = 1;
  for (let i = 1; i <= nombre; i++) {
    result *= i;
  }
  return console.log("Le resultat de ! " + nombre + " est : " + result);
}

function somme(nombre) {
  let resultat = 0;
  for (let i = 0; i <= nombre; i++) {
    resultat = resultat + i;
  }
  return console.log(
    "Le resultat de la somme des " +
      nombre +
      " premiers nombre est : " +
      resultat
  );
}
