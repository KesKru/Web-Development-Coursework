////------------------Making request with XHR---------------------////

let xhrText = document.querySelector("#XHR-quote");
let xhrBtn = document.querySelector("#XHR-button");



xhrBtn.addEventListener("click", function () {
    let XHRrequest = new XMLHttpRequest();
    XHRrequest.onreadystatechange = function () {
        if (XHRrequest.readyState == 4) {
            if (XHRrequest.status == 200) {
                xhrText.innerText = JSON.parse(XHRrequest.responseText)[0];
            } else {
                console.log("There was an error !")
            }
        }
    }
    XHRrequest.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    XHRrequest.send();
});


////------------------Making request with Fetch---------------------////

let fetchText = document.querySelector("#Fetch-quote");
let fetchBtn = document.querySelector("#Fetch-button");

fetchBtn.addEventListener("click", function () {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(fetchErrorHandling)
        .then(function (response) {
            fetchText.innerText = response[0];
        })
        .catch(function (throwError) {
            console.log(throwError);
        })
});

//Reusable error handling function
function fetchErrorHandling(response) {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response.json();
}

////------------------Making request with jQuery---------------------////

let jQueryText = document.querySelector("#jQuery-quote");
let jQueryBtn = document.querySelector("#jQuery-button");


jQueryBtn.addEventListener("click", function () {
    $.ajax({
        method: "GET",
        url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
        dataType: "json"
    })
        .done(function (response) {
            jQueryText.innerText = response[0];
        })
        .fail(function (response) {
            console.log("error")
        })
});

////------------------Making request with Axios---------------------////

let AxiosText = document.querySelector("#Axios-quote");
let AxiosBtn = document.querySelector("#Axios-button");


AxiosBtn.addEventListener("click", function () {
    axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(function (response) {
            AxiosText.innerText = response.data[0];
        })
        .catch(axiosErrorHandling)
});

//Reusable error handling function
function axiosErrorHandling(err) {
    if (err.response) {
        console.log("Problem with the response", err.response.status)
    } else if (err.request) {
        console.log("Problem with the request")
    } else {
        console.log("error", err.message)
    }
}

// * WHEN MAKIN A LLOT OF REQUESTS PUT ERROR CHECKING INTO SEPARE RESUSABLE FUNCTIONS FOR ERROR CHECKING
