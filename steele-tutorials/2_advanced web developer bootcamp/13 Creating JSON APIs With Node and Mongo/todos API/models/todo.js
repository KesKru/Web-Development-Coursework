const mongoose = require("mongoose");

// specifying schema
const todoSchema = new mongoose.Schema({
    // insted of just saying type we pass in object alowing us to specify more options.
    name: {
        type: String,
        required: "Name need to be a string !"
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// compiling model
const Todo = mongoose.model("Todo", todoSchema);

// exporting
module.exports = Todo;