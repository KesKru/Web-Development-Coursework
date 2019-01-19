////-------------------XMLHTTP Request (XHR)---------------------////

let btn = document.querySelector("#btn");
let img = document.querySelector("#img");
console.log(btn)
btn.addEventListener("click", function () {
    let XHRrequest = new XMLHttpRequest();
    XHRrequest.onreadystatechange = function () {
        if (XHRrequest.readyState == 4 && XHRrequest.status == 200) {
            let newURL = JSON.parse(XHRrequest.responseText).message;
            img.src = newURL
        }
    }
    XHRrequest.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHRrequest.send();
});





// let XHRrequest = new XMLHttpRequest();
// XHRrequest.onreadystatechange = function () {
//     if (XHRrequest.readyState == 4) {
//         if (XHRrequest.status == 200) {
//             console.log(XHRrequest.responseText);
//         } else {
//             console.log("There was an error !")
//         }
//     }
// }
// XHRrequest.open("GET", " https://api.github.com/zen");
// XHRrequest.send();