const express = require("express");
// const app = express();
//Put everything on router variable instead of app and export it.
const router = express.Router();

//// GENERAL PURPOSE ROUTES
router.get("/", function (req, res) {
    res.render("landing");
});

module.exports = router;
