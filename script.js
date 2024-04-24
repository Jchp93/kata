let nombreMax = 100;

let liste = "";
let fizz = "Fizz ";
let buzz = "Buzz";

for (let i = 1; i <= nombreMax; i++) {
    // Si c'est un multiple de 3 et de 5 remplacer par Fizz Buzz
    if (i % 3 === 0 && i % 5 === 0) {
        liste += fizz + buzz;
        liste += "\n";
    }
    // Si c'est un multiple de 3 remplacer par Fizz
    if (i % 3 === 0 && i % 5 !== 0) {
        liste += fizz;
        liste += "\n";
    }
    // Si c'est un multiple de 5 remplacer par Buzz
    if (i % 3 !== 0 && i % 5 === 0) {
        liste += buzz;
        liste += "\n";
    }
    // Si ce n'est pas un multiple de 3 et de 5 afficher le nombre
    else if (i % 3 !== 0 && i % 5 !== 0){
        liste += i;
        liste += "\n";
    }
}
console.log(liste);