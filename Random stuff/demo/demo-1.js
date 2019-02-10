

function S(selector) {
    let selectdItems = document.querySelectorAll(selector);
    return selectdItems;
}




let x = S(".box-1");


for (let i = 0; i < x.length; i++) {
     x[i].textContent = "dsfjsdgfsdhfsdhf";
}

console.log(x);


