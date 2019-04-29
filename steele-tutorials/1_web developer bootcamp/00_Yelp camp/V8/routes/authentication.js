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
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/campgrounds");
            });
        }
    });
});

////LOGIN

//show login
router.get("/login", function (req, res) {
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
    res.redirect("/campgrounds");
});

////MIDLEWERE TO CHECK IF USER IS LOGED IN

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
}

module.exports = router;