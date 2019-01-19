////------------------Fetch intro---------------------////

/* // fetch return a promise
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function (response) {
        console.log(response);
        //parses data from jason to js object and passes it to next .then
        return response.json()
    })
    // chaining next .then
    .then(function (parsedData) {
        console.log(parsedData);
    }) */

////------------------Fetch options---------------------////

/* // you can pass an object to fetch as a second prameter to set various options
fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
    method: "POST",
    body:JSON.stringify({
        name: "John",
        text: "Body of the request !!"
    })
})
    .then(function (response) {
        console.log(response);
        //parses data from jason to js object and passes it to next .then
        return response.json()
    })
    // chaining next .then
    .then(function (parsedData) {
        console.log(parsedData);
    })
 */

////------------------Fetch handling error---------------------////

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    fetch("https://api.github.com/users/colts")
        // handling errors if request is not ok, if all good passing data to next .then
        .then(handleErrors)
        .then(function (response) {
            console.log("All good !");
            console.log(response);
        })
        // throwError will be equal to whatever to whatever is in: throw Error("Custom error !!")
        .catch(function (throwError) {
            console.log(throwError);
        })
});

// handling errors in separate function and then passing it to .then
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
    } else {
        return response;
    }
}