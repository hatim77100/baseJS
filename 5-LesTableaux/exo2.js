var tab = [5, 12, 18, 13, 14, 10, 7];
var resultat = 0;
for(let i = 0; i < tab.length; i++) {
    resultat += tab[i];
    moyenne = Math.round(resultat/tab.length*10)/10
}
console.log("la moyenne est de : "+ moyenne);