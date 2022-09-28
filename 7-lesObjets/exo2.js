var readline = require("readline-sync");

var persos = [];
var choix = -1;
while (choix !== 3) {
  menu();
  choix = readline.questionInt("Quel est votre choix ? ");
  switch (choix) {
    case 1: 
        for(let i = 0; i < persos.length; i++) {
            console.log("*******************");
            afficherPersonne(persos[i]);
        }
      break;
    case 2:
      var p = genererPerso();
      persos.push(p);
      break;
    case 3:
      console.log("A+");
      break;
    default:
      console.log("Cas non pris en compte");
  }
}

function menu() {
  var txt = "*************************\n";
  txt += "1/ Afficher les personnages\n";
  txt += "2/ Ajouter un personnage\n";
  txt += "3/ Quitter\n";
  txt += "****************************";
  console.log(txt);
}

function genererPerso() {
  var perso = {
    nom: readline.question("quel est le nom ? "),
    age: readline.questionInt("quel est l'age ? "),
  };
  return perso;
}
genererPerso();

function afficherPersonne(personnage) {
  for (var info in personnage) {
    console.log(info + " : " + personnage[info]);
  }
}
