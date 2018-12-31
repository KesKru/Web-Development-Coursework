/* <--------------------------Initial setup-------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

/* <--------------------------Database-------------------------> */

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true });
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});
let Campground = mongoose.model("Campground", campgroundSchema);

// let campgroundsSeed = [
//     { name: "Camp-1", img: "https://farm1.staticflickr.com/7669/16417844773_f6b00d46db_o.jpg" },
//     { name: "Camp-2", img: "https://farm8.staticflickr.com/6164/6233656772_7f91862104_o.jpg" },
//     { name: "Camp-3", img: "https://farm6.staticflickr.com/5294/5433932379_6849672342_b.jpg" },
//     { name: "Camp-4", img: "https://farm1.staticflickr.com/2163/2398522822_0a29a4c096_o.jpg" },
//     { name: "Camp-5", img: "https://c4.staticflickr.com/8/7523/16103236218_a9fef9d0c2_o.jpg" },
// ];

// for (let i = 0; i < campgroundsSeed.length; i++) {
//     Campground.create({
//         name: campgroundsSeed[i].name,
//         image: campgroundsSeed[i].img
//     },
//         function (err, campground) {
//             if (err) {
//                 console.log("ERRORRR !!");
//                 console.log(err);
//             } else {
//                 console.log("All good !!");
//                 console.log(campground);
//             }
//         });
// }


// Campground.create({
//     name: "Camp-1",
//     image: "https://farm1.staticflickr.com/7669/16417844773_f6b00d46db_o.jpg"
// },
//     function (err, campground) {
//         if (err) {
//             console.log("ERRORRR !!");
//             console.log(err);
//         } else {
//             console.log("All good !!");
//             console.log(campground);
//         }
//     });


/* <-------------------------Routes--------------------------> */

app.get("/", function (req, res) {
    res.render("landing");
});

//INDEX - display all campgrounds
app.get("/campgrounds", function (req, res) {
    Campground.find({},
        function (err, allcampgrounds) {
            if (err) {
                console.log("ERROR !!!" + err);
            } else {
                res.render("campgrounds", { campgrounds: allcampgrounds });
            }
        });
});

//CREATE - add new campground to database
app.post("/campgrounds", function (req, res) {
    let campgroundName = req.body.campgroundName;
    let url = req.body.url;
    Campground.create({
            name: campgroundName,
            image: url
        },
            function (err, campground) {
                if (err) {
                    console.log("ERRORRR !!");
                    console.log(err);
                } else {
                    console.log("All good !!");
                    console.log(campground);
                }
            });
    res.redirect("/campgrounds");
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function (req, res) {
    res.render("newCampground");
});

//SHOW - show all info about a campground 
app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id,
        function (err, oneCampground) {
            if (err) {
                console.log("ERROR !!!" + err);
            } else {
                res.render("showCampground", { oneCampground: oneCampground });
            }
        });
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
