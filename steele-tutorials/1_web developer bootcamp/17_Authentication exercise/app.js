/* <--------------------------Initial setup-------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/user");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession({
    secret: "this text is used to decode and encode the sessions",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost/auth_demo", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

/* <-----------------------------------------------------------> */

// MIDLEWARE to prevent  acces to secret by url
function isLogedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
}
/* <-----------------------------------------------------------> */

// Home 
app.get("/", function (req, res) {
    res.render("index");
});

// Secret 
app.get("/secret", isLogedIn, function (req, res) {
    res.render("secret");
});

/* <-----------------------------------------------------------> */

// REGISTER FORM
app.get("/register", function (req, res) {
    res.render("register");
});

// REGISTER
app.post("/register", function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
            } else {
                passport.authenticate("local")(req, res, function () {
                    res.redirect("/secret");
                    console.log(user);
                });
            }
        });
});

//--------------------------------------

// LOGIN FORM
app.get("/login", function (req, res) {
    res.render("login");
});


// LOGIN 
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});

//--------------------------------------

// LOGOUT 
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

/* <-----------------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});

