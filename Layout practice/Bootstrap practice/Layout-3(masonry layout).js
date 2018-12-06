console.log("hello!!");

// querySelector
function qs(x) {
    let y = document.querySelector(x);
    return y;
}
// querySelectorAll
function qsa(x) {
    let y = document.querySelectorAll(x);
    return y;
}


// let imgCol1 = qsa(".child:nth-child(3n-2)");
// let imgCol2 = qsa(".child:nth-child(3n-1)");
// let imgCol3 = qsa(".child:nth-child(3n)");


let colNr = 3
let gutter = 50;


let img1 = qsa(".child");
let img2 = qsa(".child:nth-child(n+" + (colNr + 1) + ")");

let theTop = img1[0].offsetTop;

for (let i = 0; i < img2.length; i++) {
    
    let moveImg = (img1[0].offsetTop + img1[i].offsetHeight + gutter) - img1[i + colNr].offsetTop;
    let moveCache = moveImg
    img2[i].style.transform = "translateY(" + moveImg + "px)";
    console.log(moveImg);
    
}


// for (let i = 0; i < img2.length; i++) {
//     let moveImg = (img1[i].offsetTop + img1[i].offsetHeight + gutter);
//     img1[i + colNr].offsetTop = img1[0].offsetTop;

//     img2[i].style.transform = "translateY(" + moveImg + "px)";
//     console.log(moveImg);
// }

// let x = 0


// let moveImg = (img1[0].offsetTop + img1[x].offsetTop + img1[x].offsetHeight + gutter) - img1[x + colNr].offsetTop);
//     img2[x].offsetTop = img1[0].offsetTop;

    // img2[x].style.transform = "translateY(" + moveImg + "px)";
    // console.log(moveImg);
    console.log(theTop);



// let x = 7
// let moveImg = (img1[x].offsetTop + img1[x].offsetHeight + gutter) - img1[x + colNr].offsetTop;
// console.log(moveImg);
// img2[x].style.transform = "translateY(" + moveImg + "px)";



// console.log(img1[x].offsetTop);
// console.log(img1[x + colNr].offsetTop);


// let offBot1 = img4.offsettop -img1.offsetHeight -gutter;




// let sortingArray = document.querySelectorAll(".child");

// function resizeFn() {

//     let breakPoints = window.innerWidth;

//     if (breakPoints >= 992) {

//         let Arr1 = document.querySelectorAll(".child:nth-child(3n-2)");
//         let Arr2 = document.querySelectorAll(".child:nth-child(3n-1)");
//         let Arr3 = document.querySelectorAll(".child:nth-child(3n)");

//         let col1 = document.querySelector(".one");
//         let col2 = document.querySelector(".two");
//         let col3 = document.querySelector(".tree");

//         for (let i = 0; i < Arr1.length; i++) {
//             col1.insertAdjacentElement("beforeend", Arr1[i]);
//         }
//         for (let i = 0; i < Arr2.length; i++) {
//             col2.insertAdjacentElement("beforeend", Arr2[i]);
//         }
//         for (let i = 0; i < Arr3.length; i++) {
//             col3.insertAdjacentElement("beforeend", Arr3[i]);
//         }

//     } else if (breakPoints >= 576) {

//         let Arr1 = document.querySelectorAll(".child:nth-child(2n-1)");
//         let Arr2 = document.querySelectorAll(".child:nth-child(2n)");

//         let col1 = document.querySelector(".one");
//         let col2 = document.querySelector(".two");

//         for (let i = 0; i < Arr1.length; i++) {
//             col1.insertAdjacentElement("beforeend", Arr1[i]);
//         }
//         for (let i = 0; i < Arr2.length; i++) {
//             col2.insertAdjacentElement("beforeend", Arr2[i]);
//         }

//     } else {

//     }
// }

// resizeFn();

// var resizeTimer;

// window.onresize = function() {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function () {
//         let col1 = document.querySelector(".one");
//         col1.innerHTML = "";
//         for (let i = 0; i < sortingArray.length; i++) {
//             col1.insertAdjacentElement("beforeend", sortingArray[i]);
//         }
//         resizeFn();
//     }, 250);
// }