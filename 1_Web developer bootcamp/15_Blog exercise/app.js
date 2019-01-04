/* <--------------------------Initial setup-------------------------> */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const loremIpsum = require('lorem-ipsum');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

/* <--------------------------Database-------------------------> */

mongoose.connect("mongodb://localhost/blog_app", { useNewUrlParser: true, useFindAndModify: false });
let postSchema = new mongoose.Schema({
    author: String,
    image: String,
    body: String,
    date: { type: Date, default: Date.now }
    //incoming form fileds should be named acordingly and grouped in order to just pass in the object when creating or editing.
});
let Post = mongoose.model("Post", postSchema);

// let postsSeed = [
//     { author: "Author-1", body: loremIpsum({count: 55 , units: 'words'}), image: "https://source.unsplash.com/featured/?office?sig=1"},
//     { author: "Author-2", body: loremIpsum({count: 30 , units: 'words'}), image: "https://source.unsplash.com/featured/?office?sig=2"},
//     { author: "Author-3", body: loremIpsum({count: 65 , units: 'words'}), image: "https://source.unsplash.com/featured/?office?sig=3"},
//     { author: "Author-4", body: loremIpsum({count: 40 , units: 'words'}), image: "https://source.unsplash.com/featured/?office?sig=4"},
//     { author: "Author-5", body: loremIpsum({count: 75 , units: 'words'}), image: "https://source.unsplash.com/featured/?office?sig=5"},
// ];

// for (let i = 0; i < postsSeed.length; i++) {
//     Post.create({
//         image: postsSeed[i].image,
//         author: postsSeed[i].author,
//         body: postsSeed[i].body
//     },
//         function (err, post) {
//             if (err) {
//                 console.log("ERRORRR !!");
//                 console.log(err);
//             } else {
//                 console.log("All good !!");
//                 console.log(post);
//             }
//         });
// }

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
app.get("/posts", function (req, res) {
    Post.find({},
        function (err, allPosts) {
            if (err) {
                console.log(err);
            } else {
                res.render("posts-index", { allPosts: allPosts });
            };
        });
});

//--------------------------------------------------------------------------------

// NEW | /dogs/new | GET | Show new dog form.
app.get("/posts/new", function (req, res) {
    res.render("posts-new");
});

// CREATE | /dogs | POST | Create new dog, then redirect somewhere.
app.post("/posts", function (req, res) {
    Post.create(req.body.blogPost,
        function (err, post) {
            if (err) {
                console.log(err);
            } else {
                console.log("New post reated !!");
            }
        });
    res.redirect("/posts");
});

//--------------------------------------------------------------------------------

// SHOW | /dogs/:id | GET | Show info about one specific dog.
app.get("/posts/:id", function (req, res) {
    Post.findById(req.params.id,
        function (err, postById) {
            if (err) {
                console.log(err);
            } else {
                res.render("posts-show", { postById: postById });
            };
        });
});

//--------------------------------------------------------------------------------

// EDIT | /dogs/:id/edit | GET | Show edit form for a dog.
app.get("/posts/:id/edit", function (req, res) {
    Post.findById(req.params.id,
        function (err, postById) {
            if (err) {
                console.log(err);
            } else {
                res.render("posts-edit", { postById: postById });
            };
        });
});

// UPDATE | /dogs/:id | PUT | Update specific dog, then redirect somewhere.
app.put("/posts/:id", function (req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body.blogPost,
        function (err, updatedBlog) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/posts/" + req.params.id);
            };
        });
});

//--------------------------------------------------------------------------------

// DESTROY | /dogs/:id | DELETE | Delete specific dog, then redirect somewhere.
app.delete("/posts/:id", function (req, res) {
    Post.findByIdAndRemove(req.params.id,
        function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/posts");
            };
        });
});

/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
