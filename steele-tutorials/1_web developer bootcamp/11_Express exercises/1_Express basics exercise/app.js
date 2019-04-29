const express = require("express");
const app = express();

/* <---------------------------------------------------> */



// "/" => "Hi there"

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment !!")
});

// "/speak/..." routes

app.get("/speak/:animalName", function (req, res) {
    let animal = req.params.animalName.toLowerCase();
    let animalSoundsCollection = {
        pig: "oink",
        cow: "moo",
        dog: "woof"
    };
    let animalSound = animalSoundsCollection[animal];

    res.send(animal + " says " + animalSound);
});

// "/repeat/.../..." routes

app.get("/repeat/:mesageToRepeate/:numberOfTimesToRepeat", function (req, res) {
    let mesage = req.params.mesageToRepeate.toLowerCase();
    let times = Number(req.params.numberOfTimesToRepeat);
    let repeatedMessage = "";

    for (let i = 0; i < times; i++) {
        repeatedMessage += " " + mesage;
    }
    res.send(repeatedMessage);

});

// Catch-all route

app.get("*", function (req, res) {

    res.send("nothing here");

});

/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});