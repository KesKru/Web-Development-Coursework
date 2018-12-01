console.log("Hello !!");

let number = -10;
let number2 = 10;
let number3 = 300;
let number4 = 5;

console.log("<------------------------------------------------------------------>");

while ( number <= 19) {
    console.log(number);
    number++;
}

console.log("<------------------------------------------------------------------>");

while (number2 <= 40) {
    if (number2 % 2 === 0) {
        console.log(number2);
    }
    number2++;
}

console.log("<------------------------------------------------------------------>");

while (number3 <= 333) {
    if (number3 % 2 !== 0) {
        console.log(number3);
    }
    number3++;
}

console.log("<------------------------------------------------------------------>");

while (number4 <= 50) {
    if (number4 % 5 === 0 && number4 % 3 === 0) {
        console.log(number4);
    }
    number4++;
}