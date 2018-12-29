/* <---------------------------------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

let friends = ["friends item 1", "friends item 2", "friends item 3"];
/* <---------------------------------------------------> */


app.get("/", function(req, res) {
    res.render("home");
});

// app.get("/love/:thing", function(req, res) {
//     let thing = req.params.thing;
//     res.render("love", {thing:thing});
// });

app.post("/friends", function(req, res) {
    friends.push(req.body.newFriend);
    res.redirect("/friends");
});
 
app.get("/friends", function(req, res) {
    res.render("friends", {friends:friends});
});


/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
