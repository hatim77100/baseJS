let readline = require("readline-sync");
let saisie = readline.questionInt("saisir un chiffre entre 1 et 12 : ");

if (saisie === 1) {
  console.log("janvier");
} else if (saisie === 2) {
  console.log("fevrier");
} else if (saisie === 3) {
  console.log("mars");
} else if (saisie === 4) {
  console.log("avril");
} else if (saisie === 5) {
  console.log("mai");
} else if (saisie === 6) {
  console.log("juin");
} else if (saisie === 7) {
  console.log("juillet");
} else if (saisie === 8) {
  console.log("aout");
} else if (saisie === 9) {
  console.log("septembte");
} else if (saisie === 10) {
  console.log("octobre");
} else if (saisie === 11) {
  console.log("novembre");
} else if (saisie === 12) {
  console.log("decembre");
} else {
    console.log("Vous devez saisir un chiffre entre 1 et 12");
}
