var readline = require("readline-sync");
var premierNombre = readline.questionInt("Premier nombre : ");
var deuxiemeNombre = readline.questionInt("Deuxieme nombre : ");
var troisiemeNombre = readline.questionInt("Troisieme nombre : ");
var quatriemeNombre = readline.questionInt("Quatrieme nombre : ");

var m1 = moyenne(premierNombre, deuxiemeNombre, troisiemeNombre, quatriemeNombre);
console.log("La moyenne des 4 nombres saisis au clavier est de : " + m1);
function moyenne(nb1, nb2, nb3, nb4) {
  result = (nb1 + nb2 + nb3 + nb4) / 4;
  return result;
}
