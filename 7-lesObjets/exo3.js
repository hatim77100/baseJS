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
    libelle : "12 rue des fleurs",
    cp      : "31000",
    ville   : "Toulouse"
  },
  voitures: [v1, v2, v3],
 
  afficherVoitures : function() {
    console.log("****************************");
    console.log("****** Parc voitures *******");
    console.log("****************************");
    for(var i = 0; i < this.voitures.length; i++) {
        console.log("***** Voiture" + (i+1) +" *****");
        console.log("Marque : " + this.voitures[i].marque);
        console.log("Modèle : " + this.voitures[i].modele);
        console.log("Nombre de voitures : " + this.voitures[i].nombre);
        console.log("Prix moyen : " + this.voitures[i].prix);
    }
  },
  afficherParc : function() {
    var txt = "le parc " + this.nom + "présent à l'adresse : \n ";
        txt+=  this.adresse.libelle + "\n";
        txt+=  this.adresse.cp + " " + this.adresse.ville;
        console.log(txt);
        this.afficherVoitures(); 
  }
};

parc.afficherParc();

