console.log("conected");


let colorBox = document.querySelectorAll(".color-box");
let colorBoxHard = document.querySelectorAll(".color-box");
let colorBoxEasy = document.querySelectorAll(".color-box-easy");
let colorBoxHide = document.querySelectorAll(".hide");
let rgbH1 = document.querySelector("h1");

let btnNew = document.querySelector(".reset");
let btnEasy = document.querySelector(".easy");
let btnHard = document.querySelector(".hard");
let btnAll = document.querySelectorAll("h6");


let topRow = document.querySelector(".blue-row");

let originalHeaderColor = topRow.style.backgroundColor;
let originalColorsText = btnNew.textContent;

// Easy / Hard switch


btnEasy.addEventListener("click", function () {
    for (let i = 0; i < colorBoxHide.length; i++) {
        colorBoxHide[i].style.visibility = "hidden";
    }
    colorBox = colorBoxEasy;
    topRow.style.backgroundColor = originalHeaderColor;

    setReset();
    console.log(colorBox);
});
btnHard.addEventListener("click", function () {
    for (let i = 0; i < colorBoxHide.length; i++) {
        colorBoxHide[i].style.visibility = "visible";
    }
    colorBox = colorBoxHard;
    topRow.style.backgroundColor = originalHeaderColor;

    setReset();
    console.log(colorBox);
});



// console.log(colorBox);


// console.log(btnAll);





// random colors in boxes


function randomNr(nr) {
    return Math.floor(Math.random() * nr);
}


function setReset() {
    for (let i = 0; i < colorBox.length; i++) {
        color = "rgb(" + randomNr(255) + "," + randomNr(255) + "," + randomNr(255) + ")";
        colorBox[i].style.backgroundColor = color;
    }

    // Pick color to find and set it to the header

    let boxNr = randomNr(colorBox.length);
    let colorToFind = colorBox[boxNr].style.backgroundColor;

    rgbH1.textContent = colorToFind.toUpperCase();

    // Compare if color guess is correct

    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].addEventListener("click", function () {
            if (colorToFind === colorBox[i].style.backgroundColor) {
                for (let i = 0; i < colorBox.length; i++) {
                    colorBox[i].style.visibility = "visible";
                    colorBox[i].style.backgroundColor = colorToFind;
                }
                topRow.style.backgroundColor = colorToFind;
                btnNew.textContent = "PLAY AGAIN !!"
            } else {
                colorBox[i].style.visibility = "hidden";
            }
        })
    }
}
setReset();

// Reset

btnNew.addEventListener("click", function () {
    setReset();
    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].style.visibility = "visible";
    }
    topRow.style.backgroundColor = originalHeaderColor;
    btnNew.textContent = originalColorsText;
});



// console.log(colorToFind);