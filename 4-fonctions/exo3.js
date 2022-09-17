var readline = require("readline-sync");
var chiffreSaisi = readline.questionInt("Quel nombre voulez-voir si pair ou impair ? ");

verifierNombre(chiffreSaisi);
function verifierNombre(nombre) {
    if(nombre % 2 === 0) {
        console.log("Le nombre " + nombre + " est pair");
    } else {
        console.log("Le nombre " + nombre + " est impair");
    }
}

// verifierNombre(2);
// verifierNombre(3);
// verifierNombre(4);
// verifierNombre(5);