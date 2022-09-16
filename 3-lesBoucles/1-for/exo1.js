const readline = require("readline-sync");
const multiplication = readline.questionInt("Quel est la table de multiplication que vous voulez calculer ? ");

for(let i = 20; i >=1 ; i--) {
    console.log(i +" * " + multiplication +" = " + i * multiplication);
}