console.log("Hello !!");


let question = "Are we there yet ?";
let answer = prompt(question);




while (answer !== "yes" && answer !== "yeah") {
    answer = prompt(question);
}



alert("Yay, we made it !!");