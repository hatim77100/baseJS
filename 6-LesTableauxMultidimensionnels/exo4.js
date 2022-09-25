var readline = require("readline-sync");
var perso = [
  ["Tya", 21, false],
  ["Milo", 30, true],
  ["Lili", 15, false],
];

var choix = -1;
while (choix !== 0) {
  var ajoutePersonne = [];
  menu();
  choix = readline.questionInt("Quel est votre choix ? ");
  switch (choix) {
    case 1:
      afficherPersonnes(perso);
      break;
    case 2:
      moyenneAge(perso);
      break;
    case 3:
      var p = creerPersonne();
      ajoutePersonne.push(p);
      console.log("Le personnage a été ajouté");
      afficherPersonne(p);
      break;
    case 4:
      if (perso.length > 0) {
        afficherPersonne(perso[perso.length - 1]);
        var saisie = 0;
        while (saisie !== 1 && saisie !== 2) {
          saisie = readline.questionInt(
            "Voulez-vous vraiment supprimer ? 1 : oui - 2 : non "
          );
        }
        if (saisie === 1) {
          perso.pop();
          console.log("Le personnage a été supprimer");
        } else {
          console.log("Annulation");
        }
      } else {
        console.log("Y'a aucun personnage à supprimer");
      }
      break;
    case 5:
      var nom = readline.question("Quel est le nom recherche :");
      var indice = recherchePerso(nom, perso);
      if(indice !== -1) {
        afficherPersonne(perso[indice]);
      }else {
        console.log(`Le personnage ayant le nom ${nom} n'existe pas`);
      }
      break;
    case 0:
      console.log("A +");
      break;
    default:
      console.log("Cas non pris en compte");
  }
}

/**
 * Fonction permettant d'afficher le menu
 */

function menu() {
  let txt = "*************************************\n";
  txt += "1/ Afficher les personnages\n";
  txt += "2/ Calcul de la moyenne d'âge\n";
  txt += "3/ Ajouter un personnage\n";
  txt += "4/ Supprimer un personnage\n";
  txt += "5/ Afficher un personnage saisi au clavier\n";
  txt += "0/ Quitter\n";
  txt += "*************************************";
  console.log(txt);
}

/**
 * Fonction qui permet d'afficher une liste de personnages
 * @param {Array} tab tab : tableau de personnages
 */

function afficherPersonnes(tab) {
  for (let i = 0; i < tab.length; i++) {
    console.log("******************");
    console.log("Perso " + (i + 1) + " : ");
    afficherPersonne(tab[i]);
  }
  return;
}

/**
 * Fonction permettant d'afficher un personnage
 * @param {Array} tab tab : tableau contenant les information d'un personnage
 */

function afficherPersonne(tab) {
  console.log("Nom : " + tab[0]);
  console.log("Age : " + tab[1]);
  console.log("Sexe : " + (tab[2] ? "Homme" : "Femme"));
}

/**
 * Fonction permettant de calculer la moyenne d'âge des personnages
 * @param {Array} tab: tableau de personnages
 * @returns {number}
 */
function moyenneAge(tab) {
  let result = 0;
  let number = 0;
  for (let i = 0; i < tab.length; i++) {
    result += tab[i][1];
    number++;
  }
  moyenne = result / number++;

  return console.log("La moyenne d'âge des personnages est de : " + moyenne);
}

function creerPersonne() {
  var ajoutePersonne = [];
  var nom = readline.question("Quel est le nom ? ");
  var age = readline.questionInt("Quel est l'age ? ");
  ajoutePersonne.push(nom);
  ajoutePersonne.push(age);
  var sexeInt = 0;
  while (sexeInt !== 1 && sexeInt !== 2) {
    sexeInt = readline.questionInt(
      "Quel est le sexe ? (1 : Homme / 2 : Femme) "
    );
  } // on sort quand sexeInt est égal à 1 ou égal à 2
  if (sexeInt === 1) {
    ajoutePersonne.push(true);
  } else {
    ajoutePersonne.push(false);
  }
  return ajoutePersonne;
}

/**
 * Fonction permettant de récupérer la position d'un personnage
 * @param {String} name : le nom recherché
 * @param {Array} tab : tableau de personnages
 * @returns {number} retourne l'indice du tableau ou -1 si non trouvé
 */

function recherchePerso(name, tab) {
  for(let i = 0; i < tab.length; i++) {
    if(tab[i][0].toLowerCase() === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}
