const readline = require("readline-sync");
const moisEnChiffre = readline.questionInt(
  "Choisissez un chiffre entre 1 et 12 : "
);
let txt = `Le mois ${moisEnChiffre} correspond au mois de`;
switch (moisEnChiffre) {
  case 1:
    console.log(`${txt} janvier`);
    break;
  case 2:
    console.log(`${txt} fevrier`);
    break;
  case 3:
    console.log(`${txt} mars`);
    break;
  case 4:
    console.log(`${txt} avril`);
    break;
  case 5:
    console.log(`${txt} mai`);
    break;
  case 6:
    console.log(`${txt} juin`);
    break;
  case 7:
    console.log(`${txt} juillet`);
    break;
  case 8:
    console.log(`Le mois 8 correspond au mois d'aout`);
    break;
  case 9:
    console.log(`${txt} septembre`);
    break;
  case 10:
    console.log(`${txt} octobre`);
    break;
  case 11:
    console.log(`${txt} novembre`);
    break;
  case 12:
    console.log(`${txt} decembre`);
    break;
    default: console.log("Choisissez un chiffre entre 1 et 12");
}
