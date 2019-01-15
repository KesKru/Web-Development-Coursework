const Campground = require("../models/campground");
const Comment = require("../models/comment");
//----------------------------------------

const middleware = {};

//----------------------------------------
middleware.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
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
                    res.send("you do not own this campground");
                }
            }
        });
    } else {
        //  "back" sends user to the page that he came from
        res.send("You need to loggin to do that");
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
                    res.send("you do not own this comment");
                }
            }
        });
    } else {
        //  "back" sends user to the page that he came from
        res.send("You need to loggin to edit comments");
    }
};


module.exports = middleware;