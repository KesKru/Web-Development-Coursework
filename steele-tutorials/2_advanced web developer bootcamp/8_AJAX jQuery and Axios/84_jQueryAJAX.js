////------------------ajax with jquery---------------------////


// sending request
$.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: "json"
})
// runs when request is done and ready. It also parses json automaticaly.
.done(function (res) {
    // console.log(res)
})
// unlike fetch it checks both, errors with making the request and errors inside the request
.fail(function (res) {
    // console.log("error !")
})

////------------------ajax shorthand methods jquery---------------------////
// Shorthand for sending get request
$.get({
    url: "https://api.github.com/users/colt",
})
.done(function (res) {
    console.log(res)
})
// unlike fetch it checks both, errors with making the request and errors inside the request
.fail(function (res) {
    console.log("error !")
})

// Shorthand for sending post request
$.post({
    url: "https://api.github.com/users/colt",
})
.done(function (res) {
    console.log(res)
})
// unlike fetch it checks both, errors with making the request and errors inside the request
.fail(function (res) {
    console.log("error !")
})

// Shorthand for get request for json
$.getJSON({
    url: "https://api.github.com/users/colt",
})
.done(function (res) {
    console.log(res)
})
// unlike fetch it checks both, errors with making the request and errors inside the request
.fail(function (res) {
    console.log("error !")
})