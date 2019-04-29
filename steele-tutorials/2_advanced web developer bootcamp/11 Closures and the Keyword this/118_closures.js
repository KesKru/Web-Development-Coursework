console.log("connected !");

////------------------Closures---------------------////

//// a Closure is a functions that makes use of variables defined in outer functions that have previously returned. need to return inner function. only variables that are used in inner function are remembered from outter function.

function outer() {
    let start = "closures are"
    //this nested functions is closure
    return function inner() {
        return start + " " + "awesome"
    }
}
