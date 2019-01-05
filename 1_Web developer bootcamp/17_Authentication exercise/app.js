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
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/auth_demo", { useNewUrlParser: true, useFindAndModify: false });

/* <-----------------------------------------------------------> */

// Home 
app.get("/", function (req, res) {
    res.render("index");
});

// Secret 
app.get("/secret", function (req, res) {
    res.render("secret");
});


















/* <-------------------------Routes--------------------------> */

// RESTful routes template

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

//--------------------------------------------------------------------------------

// INDEX | /dogs | GET | List all dogs.
// app.get("/posts", function (req, res) {
//     Post.find({},
//         function (err, allPosts) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.render("posts-index", { allPosts: allPosts });
//             };
//         });
// });

//--------------------------------------------------------------------------------

// NEW | /dogs/new | GET | Show new dog form.
// app.get("/posts/new", function (req, res) {
//     res.render("posts-new");
// });

// CREATE | /dogs | POST | Create new dog, then redirect somewhere.
// app.post("/posts", function (req, res) {
//     Post.create(req.body.blogPost,
//         function (err, post) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("New post reated !!");
//             }
//         });
//     res.redirect("/posts");
// });

//--------------------------------------------------------------------------------

// SHOW | /dogs/:id | GET | Show info about one specific dog.
// app.get("/posts/:id", function (req, res) {
//     Post.findById(req.params.id,
//         function (err, postById) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.render("posts-show", { postById: postById });
//             };
//         });
// });

//--------------------------------------------------------------------------------

// EDIT | /dogs/:id/edit | GET | Show edit form for a dog.
// app.get("/posts/:id/edit", function (req, res) {
//     Post.findById(req.params.id,
//         function (err, postById) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.render("posts-edit", { postById: postById });
//             };
//         });
// });

// UPDATE | /dogs/:id | PUT | Update specific dog, then redirect somewhere.
// app.put("/posts/:id", function (req, res) {
//     Post.findByIdAndUpdate(req.params.id, req.body.blogPost,
//         function (err, updatedBlog) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.redirect("/posts/" + req.params.id);
//             };
//         });
// });

//--------------------------------------------------------------------------------

// DESTROY | /dogs/:id | DELETE | Delete specific dog, then redirect somewhere.
// app.delete("/posts/:id", function (req, res) {
//     Post.findByIdAndRemove(req.params.id,
//         function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.redirect("/posts");
//             };
//         });
// });

/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
