/* <---------------------------------------------------> */
const express = require("express");
const router = express.Router();
// when requiring directory , express will automaticaly require index.js file.
const db = require("../models");


/* <---------------------------------------------------> */

//index
exports.getAllTodos = function (req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        })
    // if you pass in object into res.send it will automaticaly convert it into json
    // res.send({ message: "landing !!" });
    // or you can explicitly specify it to be json ( prefered option)
    // res.json({ message: "hello from todos routes" })
};

//create
exports.createNewTodo = function (req, res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            // res.json(newTodo);
            // More explicit answer
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

//show
exports.showOneTodo = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function (foundTodo) {
            // res.json(newTodo);
            // More explicit answer
            res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

//update
exports.updateOneTodo = function (req, res) {
    // { new: true } makes mongo send updated item instead of old one
    db.Todo.findByIdAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
        .then(function (updatedTodo) {
            // res.json(newTodo);
            // More explicit answer
            res.json(updatedTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

//delete
exports.deleteOneTodo = function (req, res) {
    // { new: true } makes mongo send updated item instead of old one
    db.Todo.findByIdAndDelete({ _id: req.params.todoId })
        .then(function (deletedTodo) {
            // res.json(newTodo);
            // More explicit answer
            res.send("Item deleted");
        })
        .catch(function (err) {
            res.send(err);
        })
}

module.exports = exports;