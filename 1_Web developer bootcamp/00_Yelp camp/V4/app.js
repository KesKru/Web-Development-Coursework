/* <--------------------------Initial setup-------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

const Campground = require("./models/campground");
const Comment = require("./models/comment");
const seedDB = require("./seed");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

/* <--------------------------Database-------------------------> */

mongoose.connect("mongodb://localhost/yelp_camp_v3", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

/* <-------------------------Seed database--------------------------> */

seedDB();

/* <-------------------------Routes--------------------------> */
// INDEX   |  /dogs          |  GET     | List all dogs.
//--------------------------------------------------------------------------------
// NEW     |  /dogs/new      |  GET     | Show new dog form.
// CREATE  |  /dogs          |  POST    | Create new dog, then redirect somewhere.
//--------------------------------------------------------------------------------
// SHOW    |  /dogs/:id      |  GET     | Show info about one specific dog.
//--------------------------------------------------------------------------------
// EDIT    |  /dogs/:id/edit |  GET     | Show edit form for a dog.
// UPDATE  |  /dogs/:id      |  PUT     | Update specific dog, then redirect somewhere.
//--------------------------------------------------------------------------------
// DESTROY |  /dogs/:id      |  DELETE  | Delete specific dog, then redirect somewhere.

app.get("/", function (req, res) {
    res.render("landing");
});

// <--------------------------
///////////////////////
// CAMPGROUNDS
///////////////////////
//INDEX - display all campgrounds
app.get("/campgrounds", function (req, res) {
    Campground.find({},
        function (err, allcampgrounds) {
            if (err) {
                console.log(err);
            } else {
                res.render("campgrounds/index", { campgrounds: allcampgrounds });
            }
        });
});

// <--------------------------

//NEW - show form to create new campground
app.get("/campgrounds/new", function (req, res) {
    res.render("campgrounds/new");
});

//CREATE - add new campground to database
app.post("/campgrounds", function (req, res) {
    Campground.create(req.body.newCampground,
            function (err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(campground);
                }
            });
    res.redirect("/campgrounds");
});

// <--------------------------

//SHOW - show all info about a campground 
app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(
        function (err, oneCampground) {
            if (err) {
                console.log(err);
            } else {
                res.render("campgrounds/show", { oneCampground: oneCampground });
            }
        });
});

/* <---------------------------------------------------> */

///////////////////////
// CAMPGROUNDS
///////////////////////

app.listen(3000, function () {
    console.log("Server has started !");
});
