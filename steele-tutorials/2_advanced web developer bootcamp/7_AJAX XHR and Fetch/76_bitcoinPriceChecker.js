////-------------------Bitcoin price checker---------------------////

let btn = document.querySelector("#btn");
let btcPrice = document.querySelector("#btc-price");

function checkAndUpdatePrice() {
    let XHRrequest = new XMLHttpRequest();
    XHRrequest.onreadystatechange = function () {
        if (XHRrequest.readyState == 4 && XHRrequest.status == 200) {
            let price = JSON.parse(XHRrequest.responseText).bpi.GBP.rate;
            btcPrice.textContent = price + " GBP"
        }
    }
    XHRrequest.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHRrequest.send();
}

checkAndUpdatePrice();

btn.addEventListener("click", checkAndUpdatePrice);
