var readline = require("readline-sync");
var nombre = readline.questionInt("Saisir un nombre : ");
var diviseur = readline.questionInt("Diviser par : ");

if (division(nombre, diviseur)) {
  console.log("Le nombre " + nombre + " est divisible par " + diviseur);
} else {
  console.log("Le nombre " + nombre + " n'est pas divisible par " + diviseur);
}
function division(nb1, diviseur) {
//   if (nb1 % diviseur === 0) {
//     return true;
//   } else {
//     return false;
//   }
    // return nb1 % diviseur === 0 ? true : false;
    return nb1 % diviseur === 0 
}
