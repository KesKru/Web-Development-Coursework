console.log("Hello !!");

let number = Number(prompt("Please enter a number:"));
let secretNumber = 7;


if (number === secretNumber) {
    alert("Correct");
} else if (number > secretNumber) {
    alert("Too high");
} else if (number > secretNumber && number != 0){
    alert("Too low");
}
