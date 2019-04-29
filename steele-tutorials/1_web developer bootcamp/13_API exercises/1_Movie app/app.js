/* <---------------------------------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

/* <---------------------------------------------------> */

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/results", function (req, res) {
    let search = req.query.search;
    request("http://www.omdbapi.com/?s="+search+"&apikey=e3737c2d", function (error, response, body) {
        if (!error && response.statusCode == 200 ) {
            results = JSON.parse(body);
            res.render("results", {results:results, search:search});
        }
    });
});


/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
