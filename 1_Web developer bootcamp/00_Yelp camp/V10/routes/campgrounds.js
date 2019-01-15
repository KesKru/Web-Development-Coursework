const express = require("express");
const router = express.Router();
// const app = express();
//Put everything on router variable instead of app and export it.
const Campground = require("../models/campground");
//Custom middleware.
const middleware = require("../middleware/middleware");

//// CAMPGROUNDS ROUTES

// INDEX | /campgrounds | GET | List all campgrounds.
router.get("/campgrounds", function (req, res) {
    Campground.find({},
        function (err, campgroundsFromDb) {
            if (err) {
                console.log(err);
            } else {
                res.render("campgrounds/index", { campgroundsToIndex: campgroundsFromDb, currentUser: req.user });
            }
        });
});

//--------------------------

// NEW | /campgrounds/new | GET | Show new campground form.
router.get("/campgrounds/new", middleware.isLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});

// CREATE | /campgrounds | POST | Create new campground, then redirect somewhere.
router.post("/campgrounds", middleware.isLoggedIn, function (req, res) {
    Campground.create(req.body.newCampground,
        function (err, newCampgroundFromDb) {
            if (err) {
                console.log(err);
            } else {
                newCampgroundFromDb.author.id = req.user._id;
                newCampgroundFromDb.author.username = req.user.username;
                newCampgroundFromDb.save();
                console.log(newCampgroundFromDb);
            }
        });
    res.redirect("/campgrounds");
});

//--------------------------

// SHOW | /campgrounds/:id | GET | Show info about one specific campground.
router.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(
        function (err, campgroundFromDb) {
            if (err) {
                console.log(err);
            } else {
                res.render("campgrounds/show", { campgroundToShow: campgroundFromDb });
            }
        });
});

//--------------------------

// EDIT | /campgrounds/:id/edit | GET | Show edit form for a campground.
router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findById(req.params.id, function (err, campgroundFromDb) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/edit", { campgroundToEdit: campgroundFromDb });
        }
    });
});

// UPDATE | /campgrounds/:id | PUT | Update specific campground, then redirect somewhere.
router.put("/campgrounds/:id",middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.editedCampground,
        function (err, updatedCampgroundFromDb) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/campgrounds/" + req.params.id);
            };
        });
});

//--------------------------

// DESTROY | /campgrounds/:id | DELETE | Delete specific campground, then redirect somewhere.
router.delete("/campgrounds/:id",middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findByIdAndRemove(req.params.id,
        function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/campgrounds");
            };
        });
});

//--------------------------

module.exports = router;
