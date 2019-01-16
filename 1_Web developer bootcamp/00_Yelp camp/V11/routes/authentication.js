const express = require("express");
const router = express.Router();
// const app = express();
//Put everything on router variable instead of app and export it.
const User = require("../models/user");
const passport = require("passport");


//// AUTHENTICATION ROUTES

////REGISTER

//show register form to create new user
router.get("/register", function (req, res) {
    res.render("register");
});

// register user to db
router.post("/register", function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, userFromDb) {
        if (err) {
            console.log(err.message);
            req.flash("errorMessage", err.message);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function () {
                req.flash("successMessage", "Welcome to YelpCamp " + userFromDb.username + "!" );
                res.redirect("/campgrounds");
            });
        }
    });
});

////LOGIN

//show login
router.get("/login", function (req, res) {
    // passed in object is for telling .flash() what to do
    res.render("login");
});

// login
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "login"
}), function (req, res) {
});

////LOGOUT

router.get("/logout", function (req, res) {
    req.logout();
    req.flash("successMessage", "Successfuly loged out!");
    res.redirect("/campgrounds");
});

module.exports = router;