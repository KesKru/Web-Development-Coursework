/* // setInterval with limiter. need to declare variable outside funtion or it will be redeclared every time function runs and taht result in endless loop.
let num = 0;
let Interval1 = setInterval(function () {
    num++;
    console.log(num);
    //seting limit to prevent infinite loop
    if (num >= 10) {
        clearTimeout(Interval1);
    }
}, 500);

 */

function countDown(seconds) {
    let counter = setInterval(function () {
        if (seconds === 0) {
            console.log("Finish !!!");
            clearTimeout(counter);
        } else {
            console.log(seconds);
        }
        seconds--;
    }, 1000);
}

countDown(10);
