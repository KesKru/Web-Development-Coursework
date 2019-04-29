const Campground = require("../models/campground");
const Comment = require("../models/comment");
//----------------------------------------

const middleware = {};

//----------------------------------------
middleware.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        // .flash() doesn't imediatly show mesage, it gives capability to do that on the next page,- in this case /login.
        req.flash("errorMessage", "You need to login first !");
        res.redirect("/login");
    }
};
//----------------------------------------
middleware.checkCampgroundOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function (err, campgroundFromDb) {
            if (err) {
                console.log(err);
            } else {
                //  need to use .equals() because campgroundFromDb.author.id is mongoose object and req.user._id is a string.
                if (campgroundFromDb.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("errorMessage", "You can only edit/delete campgrounds that you created");
                }
            }
        });
    } else {
        //  "back" sends user to the page that he came from
        req.flash("errorMessage", "You need to login first !");
    }
};
//----------------------------------------
middleware.checkCommentOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.commentId, function (err, commentFromDb) {
            if (err) {
                console.log(err);
            } else {
                //  need to use .equals() because campgroundFromDb.author.id is mongoose object and req.user._id is a string.
                if (commentFromDb.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("errorMessage", "You can only edit/delete comments that you created");
                }
            }
        });
    } else {
        //  "back" sends user to the page that he came from
        req.flash("errorMessage", "You need to login first !");
    }
};


module.exports = middleware;