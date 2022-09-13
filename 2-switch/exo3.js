const readline = require("readline-sync");
let menu = "1/ Ajouter un joueur \n";
menu += "2/ Modifier un joueur \n";
menu += "3/ Supprimer un joueur\n";
menu += "4/ Quitter le programme";
console.log(menu);
const choix = readline.questionInt("Quel est votre choix ? ");

  
switch (choix) {
    case 1:
      console.log("Vous avez selectionne l'ajout d'un joueur ");
      break;
    case 2:
      console.log(
        "Vous avez selectionne de modifier les informations du joueur"
      );
      break;
    case 3:
      console.log("Vous avez selectionne de supprimer un joueur");
      break;
    case 4:
      console.log("A bientot");
      break;
    default:
      console.log("Ce n'est pas pris en compte");
  }

