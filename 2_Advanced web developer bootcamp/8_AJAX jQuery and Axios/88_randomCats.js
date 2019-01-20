////------------------ajax with jquery---------------------////

let btn = document.querySelector("#button");
let img = document.querySelector("#image");

btn.addEventListener("click", function () {
    $.ajax({
        method: "GET",
        url: "http://aws.random.cat/meow",
        dataType: "json"
    })
        .done(function (res) {
            console.log(res)
            img.src = res.file
        })
        .fail(function (res) {
            console.log("error")
        })
});

