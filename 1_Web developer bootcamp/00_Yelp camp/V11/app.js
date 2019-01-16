/* <--------------------------Required imports-------------------------> */

////PACKAGES
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
////MODULES
const Campground = require("./models/campground");
const Comment = require("./models/comment");
const User = require("./models/user");
////ROUTES
const indexRoutes = require("./routes/index");
const campgroundRoutes = require("./routes/campgrounds");
const commentRoutes = require("./routes/comments");
const authRoutes = require("./routes/authentication");

/* <--------------------------Initial config-------------------------> */

// Set view engine
app.set("view engine", "ejs");
// Serve public folder ( for custom css etc..)
app.use(express.static("public"));
// Body parser config
app.use(bodyParser.urlencoded({ extended: true }));
// Method override config. Passed string is the one that needs to be used when submiting the form
app.use(methodOverride("_method"));
// Package for on-screen mesages
app.use(flash());

////AUTHENTICATION CONFIG////
// Express session setup
app.use(expressSession({
    secret: "this text is used to decode and encode the sessions",
    resave: false,
    saveUninitialized: false
}))
// Passport setup
app.use(passport.initialize());
app.use(passport.session());
// Use methods from User model in passportLocal
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new passportLocal(User.authenticate()));

////DATABASE CONFIG////
// Mongoose setup
mongoose.connect("mongodb://localhost/yelp_camp_v10", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

////PASSING DATA TO ALL TEMPLATES////
// passing data to all templates at once (still need to pass it in some route at least once)
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
// can use these everywhere multiple times ,it is stored in session and is overwriten per request
    res.locals.errorMessage = req.flash("errorMessage");
    res.locals.successMessage = req.flash("successMessage");
    next();
});

////ROUTES CONFIG////
// Use imported routes
app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);
app.use(authRoutes);
// if using prefixes to shorten paths in route files( app.use("/campgrounds",indexRoutes) ), need to do this to merge route params router = express.Router({mergeParams: true}).



/* <-------------------------Seed database--------------------------> */

// const seedDB = require("./seed");
// seedDB();

/* <-------------------------Start server--------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
