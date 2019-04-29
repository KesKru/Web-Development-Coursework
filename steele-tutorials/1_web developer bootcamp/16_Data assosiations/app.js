/* --------------------INITIAL SETUP---------------------- */

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/assosiations", { useNewUrlParser: true, useFindAndModify: false });


/* --------------------EMBEDING DATA---------------------- */


// // post schema and model
// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });
// const Post = mongoose.model("post", postSchema);

// // user schema and model
// const userSchema = new mongoose.Schema({
//     email: String,
//     name: String,
//     posts: [postSchema]
// });
// const User = mongoose.model("user", userSchema);


// //define new user create it in database
// let newUser = new User({
//     email: "sam@gmail.com",
//     name: "Samm Smith"
// });

// //push post into user
// newUser.posts.push({
//     title: "First post",
//     content: "some generic content inside some generic content inside"
// });

// // create new user with post array in database in database
// newUser.save(function (err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });



// find user and push more post 
// User.findOne({ name: "Samm Smith" }, function (err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         user.posts.push({
//             title: "Third post",
//             content: "some generic content inside some generic content inside"
//         });
//         user.save(function (err, user) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//         });
//     }
// });

/* --------------------REFERENCING DATA---------------------- */

// post schema and model
// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });
// const Post = mongoose.model("post", postSchema);

// // user schema and model
// const userSchema = new mongoose.Schema({
//     email: String,
//     name: String,
//     posts: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "post"
//         }
//     ]
// });
// const User = mongoose.model("user", userSchema);

// create post , find user , asign posts id to user.
// Post.create({
//     title: "Great post - part 5",
//     content: "some generic content inside"
// }, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         User.findOne({ name: "Bob Bobby" }, function (err, user) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 user.posts.push(post);
//                 user.save(function (err, user) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(user);
//                     }
//                 });
//             }
//         });
//     }
// });


// populate posts array with real posts instead of ids.
// User.findOne({ name: "Bob Bobby" }).populate("posts").exec(function (err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// User.findOne({ name: "Bob Bobby" }, function (err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })


/* ---------------------------------------------- */


// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Bobby"
// }, function (err, user) {
//     if (err) {
//         console.log(err);   
//     } else {
//         console.log(user);   
//     }
// })

// Post.create({
//     title: "Great post - part 2",
//     content: "some generic content inside some generic content inside"
// }, function (err, post) {
//     if (err) {
//         console.log(err);   
//     } else {
//         console.log(post);   
//     }
// })














console.log("Executed !!");