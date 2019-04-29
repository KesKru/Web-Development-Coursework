const express = require("express");
// const app = express();
//Put everything on router variable instead of app and export it.
const router = express.Router();
const Campground = require("../models/campground");
const Comment = require("../models/comment");
//Custom middleware.
const middleware = require("../middleware/middleware");

//// COMMENTS ROUTES

//NEW - show form to create new campground
router.get("/campgrounds/:id/comments/new", middleware.isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campgroundFromDb) {
        if (err) {
            req.flash("errorMessage", "Something went wrong :'(");
            console.log(err);
        } else {
            res.render("comments/new", { campgroundToEdit: campgroundFromDb });
        }
    });
});

// CREATE - add new campground to database
router.post("/campgrounds/:id/comments", middleware.isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campgroundDB) {
        if (err) {
            req.flash("errorMessage", "Something went wrong :'(");
            console.log(err);
        } else {
            Comment.create(req.body.newComment, function (err, comment) {
                if (err) {
                    req.flash("errorMessage", "Something went wrong :'(");
                    console.log(err);
                } else {
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campgroundDB.comments.push(comment);
                    campgroundDB.save();
                    req.flash("successMessage", "Created new comment!");
                    res.redirect("/campgrounds/" + req.params.id);
                }
            })
        }
    });
});

//--------------------------

// EDIT | /campgrounds/:id/edit | GET | Show edit form for a campground.
router.get("/campgrounds/:id/comments/:commentId/edit", middleware.checkCommentOwnership, function (req, res) {
    Comment.findById(req.params.commentId, function (err, commentFromDb) {
        if (err) {
            req.flash("errorMessage", "Something went wrong :'(");
            console.log(err);
        } else {
            res.render("comments/edit", { campgroundId: req.params.id, commentToEdit: commentFromDb });
        }
    });
});

// UPDATE | /campgrounds/:id | PUT | Update specific campground, then redirect somewhere.
router.put("/campgrounds/:id/comments/:commentId", middleware.checkCommentOwnership, function (req, res) {
    // res.send("comment edit submit route");
    Comment.findByIdAndUpdate(req.params.commentId, req.body.editedComment,
        function (err, updatedCommentFromDb) {
            if (err) {
                req.flash("errorMessage", "Something went wrong :'(");
                console.log(err);
            } else {
                req.flash("successMessage", "Comment updated");
                res.redirect("/campgrounds/" + req.params.id);
            };
        });
});


// //--------------------------

// DESTROY | /campgrounds/:id | DELETE | Delete specific campground, then redirect somewhere.
router.delete("/campgrounds/:id/comments/:commentId", middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndRemove(req.params.commentId,
        function (err) {
            if (err) {
                req.flash("errorMessage", "Something went wrong :'(");
                console.log(err);
            } else {
                req.flash("successMessage", "Comment deleted");
                res.redirect("/campgrounds/" + req.params.id);
            };
        });
});

//--------------------------

module.exports = router;