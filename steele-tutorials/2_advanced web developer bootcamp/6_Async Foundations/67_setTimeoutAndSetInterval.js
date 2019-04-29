////-------------------setTimeout and setInterval---------------------////

/* //-----------basic timeOut-------------//
// setTimeout(callback, timeInMs)
setTimeout(function () {
    console.log("Runs in in 2000ms");
}, 2000);

//// clearing timeout
let time1 = setTimeout(function () {
    console.log("Runs in in 1000ms");
}, 1000);

let time2 = setTimeout(function () {
    console.log("Runs in in 2000ms");
}, 2000);

clearTimeout(time1);
 */

//-----------basic setInterval-------------//
// setTimeout(callback, runCodeEveryNumberOfMs)
// setInterval(function () {
//     console.log("Runs in in 500ms");
// }, 500);

// setInterval with limiter. need to declare variable outside funtion or it will be redeclared every time function runs and taht result in endless loop.
let num = 0;
let Interval1 = setInterval(function () {
    num++;
    console.log(num);
    //seting limit to prevent infinite loop
    if (num >= 10) {
        clearTimeout(Interval1);
    }
}, 500);

