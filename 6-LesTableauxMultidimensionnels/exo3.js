var eleve1 = ["Toto", 4, 17];
var eleve2 = ["Titi", 4, 17];
var eleve3 = ["Tata", 4, 17];

var tabEleves = [
    ["Toto", 4, 17],
    ["Titi", 4, 17],
    ["Tata", 4, 17],
];

function calculMoyenne(tab) {
    // tab.splice(0,1);
    let resultat = 0;
    var nbNotes = 0;
    for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] === "number") {
      resultat += tab[i];
      nbNotes++
    }
  }
  return resultat/=nbNotes;
}

for (let i = 0; i < tabEleves.length; i++) {
  console.log(
    "La moyenne de : " +
      tabEleves[i][0] +
      " est : " +
      calculMoyenne(tabEleves[i])
  );
}
