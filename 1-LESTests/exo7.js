const readline = require("readline-sync");
const classeEleve = readline.question("Saisir une lettre allant de A a E : ");

if (classeEleve === "A" || classeEleve === "B " || classeEleve === "a" || classeEleve === "b") {
  console.log("Numero 1");
}
else if (classeEleve === "C" || classeEleve === "D") {
  console.log("Numero 2");
}
else if (classeEleve === "E" || classeEleve === "F") {
  console.log("Numero 3");
}
