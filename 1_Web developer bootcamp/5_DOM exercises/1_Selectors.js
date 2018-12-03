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


// ----------------Selcting fist <p> tag 4 different ways-------------------


// 1

let s1 = document.getElementById("div1");

// 2

let s2 = document.getElementsByClassName("div");

// 3

let s3 = document.getElementsByTagName("div");

// 4

let s4 = document.querySelector(".div");

// 5

let s5 = document.querySelectorAll(".div p:nth-child(3n-2)");

let s6 = document.querySelector(".div2");


// for (let i = 0; i < s5.length; i++) {
//     s6[0].insertAdjacentElement("beforeend", s5[i]);
// }

s6.innerHTML = s5;


// s5[0].innerHTML = "demo insert";


// console.log("s1 = "+s1);
// console.log("s2 = "+s2);
// console.log("s3 = "+s3);
// console.log("s4 = "+s4);
// console.log("s5 = "+s5);

// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);
// console.log(s5);
console.log(s6);

// ----------------Manipulating style-------------------


// let p = document.querySelector("#first");
// p.style.border = "2px solid red";s