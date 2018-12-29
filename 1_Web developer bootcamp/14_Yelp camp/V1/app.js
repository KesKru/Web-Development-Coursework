/* <---------------------------------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

let campgrounds = [
    { name: "Camp-1", img: "https://farm1.staticflickr.com/7669/16417844773_f6b00d46db_o.jpg" },
    { name: "Camp-2", img: "https://farm8.staticflickr.com/6164/6233656772_7f91862104_o.jpg" },
    { name: "Camp-3", img: "https://farm6.staticflickr.com/5294/5433932379_6849672342_b.jpg" },
    { name: "Camp-4", img: "https://farm1.staticflickr.com/2163/2398522822_0a29a4c096_o.jpg" },
    { name: "Camp-5", img: "https://c4.staticflickr.com/8/7523/16103236218_a9fef9d0c2_o.jpg" },
];

/* <-------------------------Routes--------------------------> */

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("newCampground");
});

app.post("/campgrounds", function (req, res) {
    let campgroundName = req.body.campgroundName;
    let url = req.body.url;
    let newCampground = { name: campgroundName, img: url };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

























// app.get("/results", function (req, res) {
//     let search = req.query.search;
//     request("http://www.omdbapi.com/?s="+search+"&apikey=e3737c2d", function (error, response, body) {
//         if (!error && response.statusCode == 200 ) {
//             results = JSON.parse(body);
//             res.render("results", {results:results, search:search});
//         }
//     });
// });


/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
