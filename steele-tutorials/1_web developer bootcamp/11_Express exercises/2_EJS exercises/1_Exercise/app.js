/* <---------------------------------------------------> */

const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

let list = ["list item 1", "list item 2", "list item 3"];
/* <---------------------------------------------------> */


app.get("/", function(req, res) {
    // res.send("Hi there !!");
    res.render("home");
});

app.get("/love/:thing", function(req, res) {
    // res.send("Hi there !!");
    let thing = req.params.thing;
    res.render("love", {thing:thing});
});

app.get("/list", function(req, res) {
    res.render("list", {list:list});
});


/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
