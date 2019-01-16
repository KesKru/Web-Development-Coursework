const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    text: String
});

//Compiling to model on export. mongoose.model("Singular form to name collecftion in db( colection name in db will be pluralized", SchemaThatIsUsedToMakeModel);
module.exports = mongoose.model("Comment", commentSchema);