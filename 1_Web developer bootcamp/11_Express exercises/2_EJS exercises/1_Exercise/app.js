/* <---------------------------------------------------> */

const express = require("express");
const app = express();


let arr = 
/* <---------------------------------------------------> */


app.get("/", function(req, res) {
    // res.send("Hi there !!");
    res.render("home.ejs");
});

app.get("/love/:thing", function(req, res) {
    // res.send("Hi there !!");
    let thing = req.params.thing;
    res.render("love.ejs", {thing:thing});
});



/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
