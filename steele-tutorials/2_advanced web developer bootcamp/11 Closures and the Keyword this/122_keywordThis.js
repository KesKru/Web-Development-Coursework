console.log("connected !");

////------------------Determining value of keyword this---------------------////
// !! The value of this is defined when function is run , this is not in the function then it refers to global window object.
// !! The value of this is will be global window object when using setTimeout or other async code, to fix this we need to use .bing(this) at the end of the callback.

// 1. GLOBAL CONTEXT. When this is not in declared object its value will be window object
console.log(this);
//window

function whatIsThis() {
    return this
}
whatIsThis()
// window

////------------------

// 2. IMPLICIT/OBJECT BINDING. when this is in declared object its value of it will be closest parent object.
let person = {
    firstName: "Elie",
    sayHi: function () {
        //value of this is person object
        return "Hi" + this.firstName;
    },
    determineContext: function () {
        //value of this is person object
        return this === person;
    }
}

let person2 = {
    firstName: "Elie",
    //this is not in the function, so despite beeing in decelared object it still refers to global window object.
    determineContext: this
}

////------------------

// 3. EXPLICIT BINDING. When call, apply or bind is used value of this is whatever is specified in forementioned methods. call, .apply and bind can only be invoked on functions
// Method | Parameters        | Invoke immediatly ?
// -----------------------------------------
// Call   | thisArg,a,b,c..   | yes
// Apply  | thisArg,[a,b,c..] | yes
// Bind   | thisArg,a,b,c..   | no

function callName(a, b, c) {
    return this.firstName + " " + this.lastName + " " + (a + b + c);
}

let p1 = {
    firstName: "John",
    lastName: "Doe",
}

// Call
callName.call(p1, 1, 2, 3);
// Will return "John Doe 6"

// Apply (takes array instead of coma separated values like call)
callName.apply(p1, [1, 2, 3]);
// Will return "John Doe 6"

// Bind, works mostly like call but instead of imediatly running it returns new function with specifies this value. uset ful with async code.
callName.bind(p1, 1, 2, 3);
// Will return "John Doe 6"




////------------------
// 4. THE NEW KEYWORD. When new is used keyword this refers to the object that is being created.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let ellie = new Person("Ellie", "Johnson")

// !! 