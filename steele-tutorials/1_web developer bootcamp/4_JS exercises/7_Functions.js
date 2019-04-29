console.log("Hello !!");


// function isEven(x) {
//     return x % 2 === 0; 
// }

// console.log(isEven(3));


// function factorial(x) {
//     if (x === 1 || x === 0) {
//         return 1;
//     }
//     for (let index = x-1 ; index > 0; index--) {
//         x = x * index;
//     }
//     return x;
// }

function snakeToKebab(x) {
    x = x.replace(/_/g, "-");
    return x;
}


alert(snakeToKebab((prompt("Enter data"))));
// alert(factorial(Number(prompt("Enter data"))));