const age = 50;
const sexe = false;
const ville = "Toulouse";

if (age > 70 && ville === "Toulouse") {
  if (sexe === true) {
    console.log("Personne agée de Toulouse de sexe masculin");
  } else {
    console.log("Personne agée de Toulouse de sexe feminin");
  }
} else {
  if (age <= 70 && (ville === "Paris" || ville === "Moulouse")) {
    if (sexe) {
      console.log("Personne adulte de Paris ou Marseille de sexe masculin");
    } else {
      console.log("Personne adulte de Paris ou Marseille de sexe feminin");
    }
  }
}
