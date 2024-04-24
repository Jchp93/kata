let nombreMax = 100;

let liste = "";

for (let i = 1; i <=nombreMax; i ++) {
    if (i % 3 === 0) {
        liste += "Fizz";
        liste += "\n";
    }
    if (i % 5 === 0) {
        liste += "Buzz";
        liste += "\n";
    }
    if (i % 3 === 0 && i % 5 === 0) {
         liste += "Fizz Buzz";
         liste += "\n";
     }
    else {
        liste += i;
        liste += "\n";
    }  
}
  console.log(liste);