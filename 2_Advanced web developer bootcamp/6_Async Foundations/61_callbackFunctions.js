////-------------------Basic synchronous callbacks---------------------////

//Defining a simple function
function greeting(name) {
    alert('Hello ' + name);
}

//Defining a function that takes anoter function(callback) as an argument and runes it in its body. Thsis is known as a higher order function.
function processUserInput(callback) {
    let name2 = prompt('Please enter your name.');
    callback(name2);
}

//executing 
// processUserInput(greeting);

//--------------Some examples---------------//

//Duplicate code without callbakcs

function sendMessageConsole(message) {
    console.log(message);
}

function sendMessageAlert(message) {
    alert(message);
}

function sendMessageConfirm(message) {
    confirm(message);
}

//Higher order function to pass in any of functions declared above

function sendMessage(message, callback) {
    callback(message);
}

// sendMessage("demo message", sendMessageConfirm);

//------------------------/

//defining higher ordder function

function greet(name, formatter) {
    console.log("Hello " + formatter(name))
}

//Pasing in declarared function by name
function upperCaseName(name) {
    return name.toUpperCase();
 }

greet("Tom", upperCaseName);

//Passing anonymous function as a callback without defining and naming it first
greet("Tom", function(name) {
    return name.toUpperCase();
 });

