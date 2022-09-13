const readline = require("readline-sync");
const moisEnLettre = readline.question(
  "Quel mois de l'annee voulez-vous (en lettre) ? "
);
let txt = `Le mois de ${moisEnLettre} correspond au chiffre `;
switch (moisEnLettre) {
  case "Janvier":
  case "janvier":
    console.log(`${txt} 1`);
    break;
  case "Février":
  case "fevrier":
    console.log(`${txt} 2`);
    break;
  case "Mars":
  case "mars":
    console.log(`${txt} 3`);
    break;
  case "Avril":
  case "avril":
    console.log(`${txt} 4`);
    break;
  case "Mai":
  case "mai":
    console.log(`${txt} 5`);
    break;
  case "Juin":
  case "juin":
    console.log(`${txt} 6`);
    break;
  case "Juillet":
  case "juillet":
    console.log(`${txt} 7`);
    break;
  case "Aout":
  case "aout":
    console.log(`${txt} 8`);
    break;
  case "Septembre":
  case "septembre":
    console.log(`${txt} 9`);
    break;
  case "Octobre":
  case "octobre":
    console.log(`${txt} 10`);
    break;
  case "Novembre":
  case "novembre":
    console.log(`${txt} 11`);
    break;
  case "Decembre":
  case "decembre":
    console.log(`${txt} 12`);
    break;
  default:
    console.log("Ce n'est pas un mois de l'annee");
}
