console.log("hello!!");



// function listToMatrix(list, elementsPerSubArray) {
//     var matrix = [],
//         i, k;

//     for (i = 0, k = -1; i < list.length; i++) {
//         if (i % elementsPerSubArray === 0) {
//             k++;
//             matrix[k] = [];
//         }

//         matrix[k].push(list[i]);
//     }

//     return matrix;
// }

// function transposeArray(array, arrayLength) {
//     var newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         newArray.push([]);
//     };s

//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < arrayLength; j++) {
//             newArray[j].push(array[i][j]);
//         };
//     };

//     return newArray;
// }



// --------------------MASONRY LAYOUT WITH JQUERY------------------------


// let sortingArray = $(".child");

// function resizeFn() {

//     let breakPoints = $(window).width();

//     if (breakPoints >= 992) {
//         // large breakpoint

//         let Arr1 = $(".child:nth-child(3n-2)");
//         let Arr2 = $(".child:nth-child(3n-1)");
//         let Arr3 = $(".child:nth-child(3n)");
//         // --------------------------------------------
//         $(".1").html(Arr1);
//         $(".2").html(Arr2);
//         $(".3").html(Arr3);

//     } else if (breakPoints >= 576) {
//         // medium breakpoint

//         let Arr1 = $(".child:nth-child(2n-1)");
//         let Arr2 = $(".child:nth-child(2n)");
//         // --------------------------------------------
//         $(".1").html(Arr1);
//         $(".2").html(Arr2);

//     } else {

//     }
// }

// resizeFn();

// var resizeTimer;
// $(window).on('resize', function () {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function () {
//         $(".1").html(sortingArray);
//         resizeFn();
//     }, 250);

// });


// --------------------MASONRY LAYOUT WITH VANILLA JS------------------------



let sortingArray = document.querySelectorAll(".child");

function resizeFn() {

    let breakPoints = window.innerWidth;

    if (breakPoints >= 992) {

        let Arr1 = document.querySelectorAll(".child:nth-child(3n-2)");
        let Arr2 = document.querySelectorAll(".child:nth-child(3n-1)");
        let Arr3 = document.querySelectorAll(".child:nth-child(3n)");

        let col1 = document.querySelector(".one");
        let col2 = document.querySelector(".two");
        let col3 = document.querySelector(".tree");

        for (let i = 0; i < Arr1.length; i++) {
            col1.insertAdjacentElement("beforeend", Arr1[i]);
        }
        for (let i = 0; i < Arr2.length; i++) {
            col2.insertAdjacentElement("beforeend", Arr2[i]);
        }
        for (let i = 0; i < Arr3.length; i++) {
            col3.insertAdjacentElement("beforeend", Arr3[i]);
        }

    } else if (breakPoints >= 576) {

        let Arr1 = document.querySelectorAll(".child:nth-child(2n-1)");
        let Arr2 = document.querySelectorAll(".child:nth-child(2n)");

        let col1 = document.querySelector(".one");
        let col2 = document.querySelector(".two");

        for (let i = 0; i < Arr1.length; i++) {
            col1.insertAdjacentElement("beforeend", Arr1[i]);
        }
        for (let i = 0; i < Arr2.length; i++) {
            col2.insertAdjacentElement("beforeend", Arr2[i]);
        }

    } else {

    }
}

resizeFn();

var resizeTimer;

window.onresize = function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        let col1 = document.querySelector(".one");
        col1.innerHTML = "";
        for (let i = 0; i < sortingArray.length; i++) {
            col1.insertAdjacentElement("beforeend", sortingArray[i]);
        }
        resizeFn();
    }, 250);
}



// --------------------------------------------



// let Arr = [
//   "1", "2", "3",
//   "A", "B", "C",
//   "11", "22", "33",
//   "AA", "BB", "CC"
// ];

// --------------------------------------------




// let Arr = $( ".child" );

// console.log(Arr);

// // Split into sub arrays

// let divide = Arr.length / (Arr.length / 3)
// let Arr2 = listToMatrix(Arr, divide);

// console.log(Arr2);

// // Flip matrix

// let Arr3 = transposeArray(Arr2, Arr2.length);

// // Flatten back into 1 dimensional array

// Arr3 = [].concat.apply([], Arr3);
// Arr3 = Arr3.filter(function (el) {
//     return el != null || undefined;
//   });

// console.log(Arr3);

// $(".row").html(Arr3)

// console.log(Arr3);