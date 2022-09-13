let resultat = 0;
for (let i = 0; i <= 200; i = i + 2) {
  resultat = resultat + i;
}
console.log("la somme des 100 premiers nombres pair est égale à : " + resultat);

// avec le modulo :
for (let i = 0; i <= 200; i = i + 1) {
  if (i % 2 === 0) {
    i+=i;
  }
}
console.log("la somme des 100 premiers nombres pair est égale à : " + resultat);
