var readline = require("readline-sync");
var parc = require("./exo4/GestionVoitures");

var choix = -1;
while (choix !== 0) {
  menu();
  choix = readline.questionInt("Quel est votre choix ? ");
  switch (choix) {
    case 1:
      parc.afficherParc();
      break;
    case 2:
      parc.afficherVoitures();
      break;
    case 3:
      parc.modifParc();
      break;
    case 4:
      var modele = readline.questionInt("Quel modèle voulez-vous supprimer ? ");
      parc.suppressionModele(modele);
      break;
    case 0:
      console.log("A+");
      break;
    default:
      console.log("Cas non pris en compte");
  }
}

function menu() {
  var txt = "*************************\n";
  txt = "1/ Afficher le parc\n";
  txt += "2/ Afficher les voitures\n";
  txt += "3/ Modifier les informations du parc\n";
  txt += "4/ Supprimer un modèle\n";
  txt += "0/ Quitter\n";
  txt += "****************************";
  console.log(txt);
}
