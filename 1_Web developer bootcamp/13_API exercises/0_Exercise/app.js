/* <---------------------------------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

// let friends = ["friends item 1", "friends item 2", "friends item 3"];
/* <---------------------------------------------------> */


// request("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22", function (error, response, body) {
//     if (error) {
//         console.log("ERRROR!!!!");
//         console.log(error);
//     } else {
//         if (response.statusCode == 200) {
//             console.log(body);
//             let data = body;
//         }
//     }
// });

app.get("/", function (req, res) {
    request("https://jsonplaceholder.typicode.com/posts", function (error, response, body) {
        if (error) {
            console.log("ERRROR!!!!");
            console.log(error);
        } else {
            if (response.statusCode == 200) {
                console.log(body);
                let data = JSON.parse(body);
                res.render("home", { data: data });
            }
        }
    });
});

// app.get("/love/:thing", function(req, res) {
//     let thing = req.params.thing;
//     res.render("love", {thing:thing});
// });

// app.post("/friends", function(req, res) {
//     friends.push(req.body.newFriend);
//     res.redirect("/friends");
// });

// app.get("/friends", function(req, res) {
//     res.render("friends", {friends:friends});
// });


/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
