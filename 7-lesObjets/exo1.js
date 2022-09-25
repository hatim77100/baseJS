var p1 = {
  nom: "Toto",
  note1: 15,
  note2: 13,
  note3: 10,
};
var p2 = {
  nom: "Titi",
  note1: 12,
  note2: 17,
  note3: 16,
};
var p3 = {
  nom: "Tata",
  note1: 10,
  note2: 8,
  note3: 12,
};

var persos = [p1, p2, p3];

for (let i = 0; i < persos.length; i++) {
  console.log(calculMoyenne(persos[i]));
}

function calculMoyenne(perso) {
  var moyenne = 0;
  let number = 0;
  for (var element in perso) {
    if (typeof perso[element] === "number") {
      moyenne += perso[element];
      number++;
    }
  }
  return console.log(Math.round((moyenne / number) * 100) / 100);
}


