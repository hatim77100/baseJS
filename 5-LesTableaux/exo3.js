var readline = require("readline-sync");
var nombreNotes = readline.questionInt("Combien de notes voulez-vous ? ")
var tabNote = [];

for(let i = 0; i < nombreNotes; i++) {
    tabNote.push(readline.questionInt("Saisir la note numero " + (i+1) + " : "));
}
// console.log(moyenne(tabNote));
console.log("la moyenne des notes est de : " + moyenne(tabNote));

function moyenne(tab) {
    var resultat = 0;
  for (let i = 0; i < tab.length; i++) {
    resultat += tab[i];
}
moyenne = Math.round((resultat / tab.length) * 10) / 10;
return moyenne;
}

