let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demo");

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
let Cat = mongoose.model("Cat", catSchema);

Cat.create({
    name: "Max",
    age: 3,
    temperament: "evil"
}, function (err, cat) {
    if (err) {
        console.log("Something is wrong");
    } else {
        console.log("Created a new cat");
        console.log(cat);
    }
});