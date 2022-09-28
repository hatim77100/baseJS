var readline = require("readline-sync");
var choix = readline.questionInt("Quel est votre choix ? ");

switch (choix) {
  case 1:
    parc.afficherParc;
    break;
  case 2:
    parc.afficherVoitures;
    break;
  case 3:
      menu2();
      var action = readline.questionInt("Quel est votre choix ? ");
    while (action !== 0) {
      switch (action) {
        case 1:
          readline.question("Saisir le nouveau nom :");
          menu2();
          break;
        case 2:
          readline.questionInt("Quel est votre choix ? ");
          readline.question("Saisir la rue : ");
          readline.question("Saisir le CP : ");
          readline.question("Saisir la ville : ");
          break;
      }
    }
}

var v1 = {
  marque: "Yotota",
  modele: "Riyas",
  nombre: 10,
  prix: 8000,
};

var v2 = {
  marque: "Yotota",
  modele: "Risau",
  nombre: 5,
  prix: 7500,
};

var v3 = {
  marque: "Nautre",
  modele: "Negan",
  nombre: 13,
  prix: 5000,
};

var parc = {
  nom: "monSuperParc",
  adresse: {
    libelle: "12 rue des fleurs",
    cp: "31000",
    ville: "Toulouse",
  },
  voitures: [v1, v2, v3],

  afficherVoitures: function () {
    console.log("****************************");
    console.log("****** Parc voitures *******");
    console.log("****************************");
    for (var i = 0; i < this.voitures.length; i++) {
      console.log("***** Voiture" + (i + 1) + " *****");
      console.log("Marque : " + this.voitures[i].marque);
      console.log("Modèle : " + this.voitures[i].modele);
      console.log("Nombre de voitures : " + this.voitures[i].nombre);
      console.log("Prix moyen : " + this.voitures[i].prix);
    }
  },
  afficherParc: function () {
    var txt = "le parc " + this.nom + "présent à l'adresse : \n ";
    txt += this.adresse.libelle + "\n";
    txt += this.adresse.cp + " " + this.adresse.ville;
    console.log(txt);
    this.afficherVoitures();
  },
};

function menu() {
  var txt = "1/ Afficher le parc\n";
  txt += "2/ Afficher les voitures\n";
  txt += "3/ Modifier les informations du parc\n";
  txt += "0/ Quitter";
  return console.log(txt);
}

function menu2() {
  var txt = "Saisir l'action voulu : \n";
  txt += "1/ Modifier le nom\n";
  txt += "2/ Modifier l'adresse\n";
  txt += "0/ Annuler";
  return console.log(txt);
}
