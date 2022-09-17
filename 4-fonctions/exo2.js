var readline = require("readline-sync");
bonjour("Hatim");
var pseudoSaisi = readline.question("Quel est votre prenom ? ");
bonjour(pseudoSaisi);

function bonjour(pseudo) {
    console.log("------------------");
    console.log("Bonjour " + pseudo);
    console.log("Hello " + pseudo);
    console.log("Holla " + pseudo);
    console.log("------------------");
    console.log("------------------");
}
