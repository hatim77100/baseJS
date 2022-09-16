var readline = require("readline-sync");
var saisie = readline.questionInt("Quel nombre voulez vous ? ");
var resultatFactorielle= 1;
var cpt = 1;

while(resultatFactorielle < saisie) {
    resultatFactorielle = resultatFactorielle * cpt;
    cpt ++;
    console.log(cpt + "ème passage = " + resultatFactorielle);
}
