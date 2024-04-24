let nombreMax = 100;

let liste = "";
let liste3 = "Fizz ";
let liste5 = "Buzz";

for (let i = 1; i <= nombreMax; i++) {
    // Si c'est un multiple de 3 et de 5 remplacer par Fizz Buzz
    if (i % 3 === 0 && i % 5 === 0) {
        liste += liste3 + liste5;
        liste += "\n";
    }
    // Si c'est un multiple de 3 remplacer par Fizz
    if (i % 3 === 0 && i % 5 !== 0) {
        liste += liste3;
        liste += "\n";
    }
    // Si c'est un multiple de 5 remplacer par Buzz
    if (i % 3 !== 0 && i % 5 === 0) {
        liste += liste5;
        liste += "\n";
    }
    else if (i % 3 !== 0 && i % 5 !== 0){
        liste += i;
        liste += "\n";
    }
}
console.log(liste);