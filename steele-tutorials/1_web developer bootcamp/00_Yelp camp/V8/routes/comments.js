const express = require("express");
// const app = express();
//Put everything on router variable instead of app and export it.
const router = express.Router();
const Campground = require("../models/campground");
const Comment = require("../models/comment");

//// COMMENTS ROUTES

//NEW - show form to create new campground
router.get("/campgrounds/:id/comments/new", isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, oneCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", { oneCampground: oneCampground });
        }
    });
});

// CREATE - add new campground to database
router.post("/campgrounds/:id/comments", isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campgroundDB) {
        if (err) {
            console.log(err);
        } else {
            Comment.create(req.body.newComment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campgroundDB.comments.push(comment);
                    campgroundDB.save();
                    res.redirect("/campgrounds/" + req.params.id);
                }
            })
        }
    });
});

// ISLOGGEDIN MIDDLEWERE
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
}

module.exports = router;