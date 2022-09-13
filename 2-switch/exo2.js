const readline = require("readline-sync");
const ageSaisi = readline.questionInt("Saisissez votre age ? (entre 16 et 25) ? : ");

switch (ageSaisi) {
  case 16:
  case 17:
    console.log("Mineur");
    break;
  case 18:
  case 19:
  case 20:
    console.log("Majeur");
    break;
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
    console.log("Adulte");
    break;
    default : console.log("âge non pris en compte");
}
