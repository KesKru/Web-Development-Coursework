////------------------ajax with axios---------------------////


//sending request
axios.get("https://api.github.com/users/colt")
.then(function (res) {
    // wokrks jsu like promises. Also parses json atomaticaly.
    console.log(res);
})
.catch(function (err) {
    if (err.response) {
        console.log("Problem with the response")
    } else if (err.request) {
        console.log("Problem with the request")
    } else {
        console.log("error: " + err.message)
    }
})
 