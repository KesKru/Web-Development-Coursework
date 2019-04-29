////-------------------XMLHTTP Request (XHR)---------------------////

// Old way of making request , should avoid if plausible.
//Example of making request to https://api.github.com/zen

// making new XHR object
let XHRrequest = new XMLHttpRequest();
// XHRrequest.onreadystatechange runs when state of the request changes. 4 mean request is done.
XHRrequest.onreadystatechange = function () {
    // Checking if request is finished. XHRrequest.readyState == 4,- it is finished, atherwise not.
    if (XHRrequest.readyState == 4) {
        // Checking for errors. If status code 200 - all good, otherwise  - error.
        if (XHRrequest.status == 200) {
            // Request request respons is in XHRrequest.responseText
            console.log(XHRrequest.responseText);
        } else {
            console.log("There was an error !")
        }
    }
}
// Specifying method and URL
XHRrequest.open("GET", " https://api.github.com/zen");
// Sending the equest
XHRrequest.send();

// Can combine error checking into one if statement,- if(XHRrequest.readyState == 4 && XHRrequest.status == 200)

////-------------------Fetch API---------------------////



////-------------------3rd party Libraries: jQuery and Axios---------------------////

