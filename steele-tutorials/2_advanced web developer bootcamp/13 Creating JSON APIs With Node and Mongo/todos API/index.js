/* <---------------------------------------------------> */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

/* <---------------------------------------------------> */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

/* <---------------------------------------------------> */

//include routes
const todoRoutes = require("./routes/todos");

/* <-------------------------Routes--------------------------> */

app.get("/", function (req, res) {
    // if you pass in object into res.send it will automaticaly convert it into json
    // res.send({ message: "landing !!" });
    // or you can explicitly specify it to be json ( prefered option)
    // res.json({ message: "landing !!" })
    res.sendFile("index.html");
});
/* <---------------------------------------------------> */

//use imported routes
app.use(todoRoutes);

/* <---------------------------------------------------> */

app.listen(3000, function () {
    console.log("Server has started !");
});
