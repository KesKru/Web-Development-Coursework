console.log("hi from app.js !!");

// --------------------- AJAX calls ---------------------

$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(listAllTodos)
        .catch(errorLog)

    $("#todoInput").keypress(function (event) {
        //  .which contains keycode value. 13 is enter.
        if (event.which == 13) {
            saveNewTodoInDb()
        }
    });

    // Need to listen for events on something that exists at the begining and is not dynamicaly generetaed. added 2nd argument "span", to tell jquery to only add event listeners on <span> that are nested in the elements with ".list" class,- in this case <ul>. Need to do this becouse spans only apear then hoverring over li so they are not loaded at first and adding stuf directly on them wouldnt work because thay don't exist at the page loaded and this code is run. 
    $(".list").on("click", "span", function () {
        removeTodo($(this).parent());
    });

    // toggling todos complettion
    $(".list").on("click", "li", function (event) {
        // event.stopPropaggation() prevents event bubling
        event.stopPropagation();
        toggleTodoCompletion($(this));
    });
});


// --------------------- FUNCTIONS ---------------------

//Listing all todos
function addOneTodo(todo) {
    // data-*  custom atribute to store extra info about elements
    let newTodo = $("<li data-todo-completed=" + todo.completed + " " + "data-todo-id=" + todo._id + " " + "class='task'>" + todo.name + " " + todo.completed + "<span>X</span></li>");
    if (todo.completed) {
        newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}
//Appending new todo
function listAllTodos(todos) {
    todos.forEach(function (todo) {
        addOneTodo(todo);
    });
}

// Save new todo in db
function saveNewTodoInDb(todos) {
    $.post("/api/todos", { name: $("#todoInput").val() })
        .then(function (newTodo) {
            addOneTodo(newTodo);
            $("#todoInput").val("");
        })
        .catch(errorLog)
}

// Remove todo
function removeTodo(todoToRemove) {
    $.ajax({
        method: "DELETE",
        url: "/api/todos/" + todoToRemove.attr("data-todo-id")
    })
        .then(function (data) {
            todoToRemove.remove();
        })
        .catch(errorLog)
}

// toggle completion
function toggleTodoCompletion(todoToUpdate) {
    isCompleted = todoToUpdate.attr("data-todo-completed") === "true"

    $.ajax({
        method: "PUT",
        url: "/api/todos/" + todoToUpdate.attr("data-todo-id"),
        data: { completed: !isCompleted }
    })
        .then(function (updatedTodo) {
            todoToUpdate.toggleClass("done")
            todoToUpdate.attr("data-todo-completed", updatedTodo.completed)
        })
        .catch(errorLog)
}

// error handling
function errorLog(err) {
    console.log(err);
}