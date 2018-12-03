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



// --------------------------------------------

let sortingArray = $(".child");

function resizeFn() {

    let breakPoints = $(window).width();

    if (breakPoints >= 992) {
        // large breakpoint

        let Arr1 = $(".child:nth-child(3n-2)");
        let Arr2 = $(".child:nth-child(3n-1)");
        let Arr3 = $(".child:nth-child(3n)");
        // --------------------------------------------
        $(".1").html(Arr1);
        $(".2").html(Arr2);
        $(".3").html(Arr3);

    } else if (breakPoints >= 576) {
        // medium breakpoint

        let Arr1 = $(".child:nth-child(2n-1)");
        let Arr2 = $(".child:nth-child(2n)");
        // --------------------------------------------
        $(".1").html(Arr1);
        $(".2").html(Arr2);

    } else {

    }
}

resizeFn();

var resizeTimer;
$(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        $(".1").html(sortingArray);
        resizeFn();
    }, 250);

});

// window.onresize = function(){
//     setTimeout(function() {
//         $(".1").html(sortingArray);
//         resizeFn();
//     }, 500);
//   };




//   $(window).resize(function () {
//     waitForFinalEvent(function(){
//       alert('Resize...');
//       //...
//     }, 500, "some unique string");
// });


// $(window).resize(resizeFn());

// $(document).ready(function () {
//     $(window).trigger('resize');
// });



// mobile default







// let Arr1 = $(".child:nth-child(3n-2)");
// let Arr2 = $(".child:nth-child(3n-1)");
// let Arr3 = $(".child:nth-child(3n)");
// // --------------------------------------------
// $(".1").html(Arr1);
// $(".2").html(Arr2);
// $(".3").html(Arr3);
// // --------------------------------------------
// console.log(Arr1);
// console.log(Arr2);
// console.log(Arr3);


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