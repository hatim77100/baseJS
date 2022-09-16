let tirets = "";

for (let i = 1; i <= 20; i++) {
  tirets += "-";
}
for (let j = 1; j <= 5; j++) {
  console.log(tirets);
}

let slash = "";
let antislash = "";
for (let i = 1; i <= 20; i++) {
  slash += "/";
  antislash += "\\";
}
for (let j = 1; j <= 5; j++) {
    if(j % 2 === 0) {
        console.log(antislash);
    } else {
        console.log(slash);
    }
}


