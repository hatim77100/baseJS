var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];
var perso = [
  ["Tya", 21, false],
  ["Milo", 30, true],
  ["Lili", 15, false],
];
for (let i = 0; i < perso.length; i++) {
    console.log("******************");
    console.log("Perso " + (i+1) + " : ");
    afficherPersonne(perso[i]);

} 

function afficherPersonne(tab) {
  console.log("Nom : " + tab[0]);
  console.log("Age : " + tab[1]);
  console.log("Sexe : " + (tab[2] ? "Homme" : "Femme"));
}

