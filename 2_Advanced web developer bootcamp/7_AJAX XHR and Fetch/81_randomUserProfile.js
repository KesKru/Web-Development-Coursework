let button = document.querySelector("#button");
let image = document.querySelector("#image");
let name = document.querySelector("#name");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");

button.addEventListener("click", function () {
    fetchUserInfo();
});

//-------------------------------------
// Defining fetch functionality
function fetchUserInfo() {
    fetch("https://randomuser.me/api/")
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
}

//-------------------------------------
// Defining functions to hendle various steps to keep fetch call kleen

//handle errors
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
    } else {
        return response;
    }
}

//parse json
function parseJSON(data) {
    return data.json();
}

//updating dome
function updateProfile(parsedData) {
    image.src = parsedData.results[0].picture.large;
    name.innerText = parsedData.results[0].name.first + " " + parsedData.results[0].name.last;
    username.innerText = parsedData.results[0].login.username;
    email.innerText = parsedData.results[0].email;
    city.innerText = parsedData.results[0].location.city;
}

//print error
function printError(throwError) {
    console.log(throwError);
}

// fetching data once to fill have initial data before button press
fetchUserInfo();