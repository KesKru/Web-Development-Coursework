const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema({
    username: String,
    password: String
});

//Add passportLocalMongoose for suporting interactions between passport.js and mongoDB
userSchema.plugin(passportLocalMongoose);

//Compiling to model on export. mongoose.model("Singular form to name collecftion in db( colection name in db will be pluralized", SchemaThatIsUsedToMakeModel);
module.exports =  mongoose.model("User", userSchema);