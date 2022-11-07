var readline = require("readline-sync");

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
    var txt = "le parc " + this.nom + " présent à l'adresse : \n ";
    txt += this.adresse.libelle + "\n";
    txt += this.adresse.cp + " " + this.adresse.ville + "\n";
    txt += "******************************";
    console.log(txt);
  },
  modifParc: function () {
    var saisie = -1;
    while (saisie !== 0) {
      var txt = "*************************\n";
      txt = "1/ Modifier le nom\n";
      txt += "2/ Modifier l'adresse\n";
      txt += "0/ Annuler\n";
      txt += "****************************";
      console.log(txt);
      saisie = readline.questionInt("Quel est votre choix. ? ");
      switch (saisie) {
        case 1:
          this.nom = readline.question("Quel est le nouveau nom ? ");
          break;
        case 2:
          parc.adresse.libelle = readline.question(
            "Quelle est la nouvelle rue ? "
          );
          parc.adresse.cp = readline.questionInt("Quel est le nouveau CP ? ");
          parc.adresse.ville = readline.question(
            "Quelle est la nouvelle Ville ? "
          );
          break;
        case 0:
          console.log("Annulation");
          break;
        default:
          console.log("cas non pris en compte");
      }
    }
  },
  suppressionModele: function (modele) {
    var position = this.getPositionModele(modele);
    if (position !== -1) {
      this.voitures.splice(position, 1);
      console.log("Suppression réussie");
    } else {
      console.log("Le modèle n'existe pas");
    }
  },
  getPositionModele: function (modele) {
    for (var i = 0; i < this.voitures.length; i++) {
      if (this.voitures[i].modele.toLocaleLowerCase() === modele.toLocaleLowerCase()) {
        return i;
      }
      return -1;
    }
  },
};

module.exports = parc;
