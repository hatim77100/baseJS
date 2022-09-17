// -------- Main
function main() {
    ligne();
    console.log("Bonjour");
    quatreLigne();
    console.log("Coucou");
    quatreLigne();
    console.log("salut");
    ligne();
}
main();

// ------- Functions

function ligne() {
    var tiret = "";
  for (let i = 1; i < 20; i++) {
    tiret += "-";
  }
  console.log(tiret);
}
// ligne()
function quatreLigne() {
  for (let j = 1; j < 5; j++) {
    ligne();
  }
}
// quatreLigne()
// ligne();
