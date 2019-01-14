var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
const loremIpsum = require('lorem-ipsum');


var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm1.staticflickr.com/7669/16417844773_f6b00d46db_o.jpg",
        description: loremIpsum({count: 55 , units: 'words'})
    },
    {
        name: "Desert Mesa",
        image: "https://farm8.staticflickr.com/6164/6233656772_7f91862104_o.jpg",
        description: loremIpsum({count: 55 , units: 'words'})
    },
    {
        name: "Mountain Horn",
        image: "https://farm6.staticflickr.com/5294/5433932379_6849672342_b.jpg",
        description: loremIpsum({count: 55 , units: 'words'})
    },
    {
        name: "Black Forrest",
        image: "https://farm1.staticflickr.com/2163/2398522822_0a29a4c096_o.jpg",
        description: loremIpsum({count: 55 , units: 'words'})
    },
    {
        name: "Canyon Floor",
        image: "https://c4.staticflickr.com/8/7523/16103236218_a9fef9d0c2_o.jpg",
        description: loremIpsum({count: 55 , units: 'words'})
    }
];



function seedDB() {
    //Remove all campgrounds
    Campground.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
    //     //add a few campgrounds
    //     data.forEach(function (seed) {
    //         Campground.create(seed, function (err, campground) {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 console.log("added a campground");
    //                 //create a comment
    //                 Comment.create(
    //                     {
    //                         text: "This place is great, but I wish there was internet",
    //                         author: "Homer"
    //                     }, function (err, comment) {
    //                         if (err) {
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("Created new comment");
    //                         }
    //                     });
    //             }
    //         });
    //     });
    });
    //add a few comments
}

module.exports = seedDB;
