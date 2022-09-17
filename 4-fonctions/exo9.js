var readline = require("readline-sync");
var prenom = readline.question("Quel est votre prenom ? ");
var langue = readline.question(
  "Quelle est la langue que vous voullez (FR / EN / ES) ? "
);

if (langue.toUpperCase() === "FR") {
  console.log(bonjour(prenom, langue));
} else if (langue.toUpperCase() === "EN") {
  console.log(bonjour(prenom, langue));
} else if (langue.toUpperCase() === "ES") {
  console.log(bonjour(prenom, langue));
} else {
  console.log("Cette langue n'est pas disponible");
}

function bonjour(prenom, langue) {
  if (langue.toUpperCase() === "FR") {
    return "Bonjour " + prenom;
  } else if (langue.toUpperCase() === "EN") {
    return "Hello " + prenom;
  } else if (langue.toUpperCase() === "ES") {
    return "Holla " + prenom;
  }
}
