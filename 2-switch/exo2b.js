const readline = require("readline-sync");
const ageSaisi = readline.questionInt(
  "Saisissez votre age ? (entre 16 et 25) ? : "
);

if (ageSaisi < 18 && ageSaisi >= 16) {
  console.log("Mineur");
} else if (ageSaisi < 21) {
  console.log("Majeur");
} else if (ageSaisi <= 25) {
  console.log("Adulte");
} else {
  console.log("age non pris en compte");
}
