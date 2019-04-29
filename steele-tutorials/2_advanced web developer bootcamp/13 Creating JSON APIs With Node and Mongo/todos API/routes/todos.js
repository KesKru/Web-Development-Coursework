/* <---------------------------------------------------> */
const express = require("express");
const router = express.Router();
// when requiring directory , express will automaticaly require index.js file.
const db = require("../models");
const helpers = require("../helpers/todos");


/* <---------------------------------------------------> */

//index
router.get("/api/todos", helpers.getAllTodos);
//create
router.post("/api/todos", helpers.createNewTodo);
//show
router.get("/api/todos/:todoId", helpers.showOneTodo);
//update
router.put("/api/todos/:todoId", helpers.updateOneTodo);
//delete
router.delete("/api/todos/:todoId", helpers.deleteOneTodo);

module.exports = router;