var readline = require("readline-sync");
var nombreSaisi = readline.questionInt("Quel nombre voulez-vous ? : ");
var tab = [4, 8, 12, 16];

function verifierTab(tab, nombre) {
  for (let i = 0; i < tab.length; i++) {
      if (tab[i] % nombre === 0) {
          return console.log("Le tableau contient que des valeurs divisible par " + nombre);
        } else {
            return console.log("Le tableau ne contient pas que des valeurs divisible par " + nombre);
        }
    }
}
verifierTab(tab, nombreSaisi);
