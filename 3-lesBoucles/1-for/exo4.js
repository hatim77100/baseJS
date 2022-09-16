const readline = require("readline-sync");
const nombre = readline.questionInt("Choisir la factorielle a calculer : ");
let resultat = 1;
for (let i = 1; i <= nombre; i++) {
  resultat *=i;
  console.log(i +" : "+resultat);
  if(i === 1){
      console.log( `${i}er passage - total = ${resultat}`);
  }else {
      console.log( `${i}ème passage - total = ${resultat}`);
  }
}
