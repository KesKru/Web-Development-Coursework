/* <--------------------------Initial setup-------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

const Campground = require("./models/campground");
const Comment = require("./models/comment");
const User = require("./models/user");
const seedDB = require("./seed");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// passing data to all templates at once (still need to pass it in some route at least once)
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
})

/* <--------------------------Passport config-------------------------> */

app.use(expressSession({
    secret: "this text is used to decode and encode the sessions",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* <--------------------------Database-------------------------> */

mongoose.connect("mongodb://localhost/yelp_camp_v6", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

/* <-------------------------Seed database--------------------------> */

// seedDB();

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
// CAMPGROUNDS ROUTES
///////////////////////
//INDEX - display all campgrounds
app.get("/campgrounds", function (req, res) {
    Campground.find({},
        function (err, allcampgrounds) {
            if (err) {
                console.log(err);
            } else {
                res.render("campgrounds/index", { campgrounds: allcampgrounds, currentUser: req.user });
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
// COMMENTS ROUTES
///////////////////////


//NEW - show form to create new campground
app.get("/campgrounds/:id/comments/new", isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, oneCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", { oneCampground: oneCampground });
        }
    });
});

// CREATE - add new campground to database
app.post("/campgrounds/:id/comments", isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campgroundDB) {
        if (err) {
            console.log(err);
        } else {
            Comment.create(req.body.newComment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    campgroundDB.comments.push(comment);
                    campgroundDB.save();
                    res.redirect("/campgrounds/" + req.params.id);
                }
            })
        }
    });
});


/* <---------------------------------------------------> */

//////////////////////////
// AUTHENTICATION ROUTES
//////////////////////////

////REGISTER

//show register form to create new user
app.get("/register", function (req, res) {
    res.render("register");
});

// register user to db
app.post("/register", function (req, res) {
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
app.get("/login", function (req, res) {
    res.render("login");
});

// login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "login"
}), function (req, res) {

});

////LOGOUT

app.get("/logout", function (req, res) {
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


/* <---------------------------------------------------> */


app.listen(3000, function () {
    console.log("Server has started !");
});
