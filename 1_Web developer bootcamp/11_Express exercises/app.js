/* <---------------------------------------------------> */

const express = require("express");
const app = express();

/* <---------------------------------------------------> */



// "/" => "Hi there"

app.get("/", function(req, res) {
    res.send("Hi there !!")
});

// "/bye" => "Goodbye"

app.get("/bye", function(req, res) {
    res.send("Goodbye !!")
});

// "/dog" => "Woof"

app.get("/dog", function(req, res) {
    res.send("Woof !!")
});

// "*" => cathes all undefined routes

app.get("*", function(req, res) {
    res.send("Route doesnt exist :(")
});


/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
