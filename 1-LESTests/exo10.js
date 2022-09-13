  let age = 19
  console.log(age < 18 ? "mineur" : "majeur");

  let sportif = true;
  console.log( sportif ? "bien" : "Devrait faire du sport");

  let sexe = false;
  console.log(sexe ? "femme": "homme");

  const readline = require("readline-sync");
  const nombreSaisie = readline.questionInt("Saisissez un nombre : ");
  console.log(nombreSaisie % 2 ?  "impair": "pair");

  const readline2 = require("readline-sync");
  const nombreSaisie2 = readline2.questionInt("Saisissez un nombre : ")
  console.log(nombreSaisie2 % 4 ? "non divisible par 4": "divisible par 4");
  