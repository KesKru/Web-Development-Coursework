// ----------------Intro-------------------


// let h1 = document.querySelector("h1");
// h1.style.color = "red";


// -----------------------------------


// let h1 = document.querySelector("h1");
// let state = true;

// setInterval(function(){
//     if (state === true) {
//         h1.style.color = "red";
//     } else {
//         h1.style.color = "blue";
//     }
//     state = !state;
// }, 1000);


// console.log(h1);


// -----------------Selectors------------------


// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


// let x = document.getElementById("div1");

// let x = document.getElementsByClassName("main");

// let x = document.getElementsByTagName("div");

// let x = document.querySelector(".main");

// let x = document.querySelectorAll(".main");


// console.log(x);


// -----------------Manipulating style------------------

// let x = document.querySelectorAll(".main")[0];

// x.style.color = "blue";
// x.style.border = "2px solid red";
// x.style.fontSize = "30px";
// x.style.background = "yellow";
// x.style.marginTop = "100px";

// x.classList.add("someClass");
// x.classList.remove("someClass");
// x.classList.toggle("someClass");


// -----------------Manipulating text and content------------------


// let x = document.querySelectorAll(".main")[0];

// x.textContent = "some-text";
// x.innerHTML = "some-text";


// -----------------Manipulating Attributes------------------


// let x = document.querySelectorAll(".main")[0];

// x.setAttribute("src", "corgi.png");


// -----------------Events------------------


// let x = document.querySelectorAll(".text");



// x[0].addEventListener("click", function () {
//     // What to do 
// });

// for (let i = 0; i < x.length; i++) {
//      x[i].addEventListener("click", function () {
//         // What to do 
//     }); 
// }


// -----------------Color changer------------------


// let btn = document.querySelectorAll("button");
// let body = document.querySelectorAll("body");

// console.log(btn);


// btn[0].addEventListener("click", function () {

//     body[0].classList.toggle("background-2");

//     });


// -----------------Score keeper------------------


// let score1 = document.querySelector(".score-1");
// let score2 = document.querySelector(".score-2");

// let btn1 = document.querySelector(".btn-score-1");
// let btn2 = document.querySelector(".btn-score-2");

// let maxScore = document.querySelector(".max-score");
// let maxScoreSet = document.querySelector(".max-score-set");

// let reset = document.querySelector(".reset");


// btn1.addEventListener("click", function () {
//     if (Number(score1.innerHTML) < Number(maxScore.innerHTML)) {
//         score1.innerHTML = Number(score1.innerHTML) + 1;
//         if (Number(maxScore.innerHTML) == Number(score1.innerHTML)) {
//             score1.className = "score-win"
//         }
//     } 
// });
// btn2.addEventListener("click", function () {
//     if (Number(score2.innerHTML) < Number(maxScore.innerHTML)) {
//         score2.innerHTML = Number(score2.innerHTML) + 1;
//         if (Number(maxScore.innerHTML) == Number(score2.innerHTML)) {
//             score2.className = "score-win"
//         }
//     } 
// });

// maxScoreSet.addEventListener("input", function () {
//     maxScore.innerHTML = maxScoreSet.value;
// });

// reset.addEventListener("click", function () {
//     score1.innerHTML = 0;
//     score2.innerHTML = 0;
//     score1.className = "score";
//     score2.className = "score";
// });




console.log(maxScore);