const mongoose = require("mongoose");

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

//Compiling to model on export. mongoose.model("Singular form to name collecftion in db( colection name in db will be pluralized", SchemaThatIsUsedToMakeModel);
module.exports = mongoose.model("Campground", campgroundSchema);