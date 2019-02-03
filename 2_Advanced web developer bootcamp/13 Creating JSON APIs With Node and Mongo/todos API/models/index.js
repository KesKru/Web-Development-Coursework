// By default express looks for index.js file first
const mongoose = require("mongoose");
// sets mongoose to shows errors
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo_api", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});
// alows us to use promise syntax as oposed to callbacks
mongoose.Promise = Promise;
// including todo schema and exporting it. 
module.exports.Todo = require("./todo");