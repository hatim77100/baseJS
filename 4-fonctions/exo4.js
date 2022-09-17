var readline = require("readline-sync");
var prenom = readline.question("Quel est votre prenom ? ");
var langue = readline.question("Quelle est la langue que vous voullez (FR / EN / ES) ? ")

bonjour(prenom, langue)
function bonjour(prenom, langue) {
   switch(langue.toUpperCase()) {
    // case "fr" :
    case "FR": console.log("Bonjour " + prenom);
    break;
    // case "en" :
    case "EN" : console.log("Hello " + prenom);
    break;
    // case "es" :
    case "ES" : console.log("Hola " + prenom);
    break;
    default : console.log("Veuillez rentrer des informations valides");
   }
}


