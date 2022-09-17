var readline = require("readline-sync");
var emprunt = readline.questionInt("Combien voulez-vous emprunter ? ");
var taux = readline.questionInt("Quel est le taux propose par votre banquier par an ? ");
var dureeEmprunt = readline.questionInt("Quelle est la duree de l'emprunt en annee ? ");

// fonction calcul :
var mensualite = calculDeMensualite(emprunt, taux, dureeEmprunt);
console.log("Votre mensualite sera de " + mensualite + " € par mois");
function calculDeMensualite(emprunt, taux, dureeEmprunt) {
    i = (taux/100)/12;
    return Math.round((emprunt * i)/(1-Math.pow((1+i), -(dureeEmprunt*12)))*100)/100;
}

