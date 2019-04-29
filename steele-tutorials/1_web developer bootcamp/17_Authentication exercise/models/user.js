const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    author: String,
    image: String,
    body: String,
    date: { type: Date, default: Date.now },
    // incoming form fileds should be named acordingly and grouped in order to just pass in the object when creating or editing.
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
