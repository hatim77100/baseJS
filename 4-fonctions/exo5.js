var readline = require("readline-sync");
var chiffreSaisi = readline.questionInt("Quel nombre voulez-vous diviser ? ");
var nombreDivisible = readline.questionInt("Par ? ");

verifierNombre(chiffreSaisi, nombreDivisible);
function verifierNombre(nombre, diviseur) {
    if(nombre % diviseur === 0) {
        console.log("Le nombre " + nombre + " est divisible par " + diviseur);
        console.log("-------------------------");
    } else {
        console.log("Le nombre " + nombre + " n'est pas divisible pas " + diviseur + " car le reste est de 2");
    }
}