const readline = require("readline-sync");
const  saisie = readline.question("saisir le mois de l annee en lettre : ");

const txt = `le mois ${saisie} correspond à `
if(saisie === "janvier") {
    console.log(txt + "1");
}else if(saisie === "fevrier") {
    console.log(txt + "2");
}else if(saisie === "mars") {
    console.log(txt + "3");
}else if(saisie === "avril") {
    console.log(txt + "4");
}else if(saisie === "mai") {
    console.log(txt + "5");
}