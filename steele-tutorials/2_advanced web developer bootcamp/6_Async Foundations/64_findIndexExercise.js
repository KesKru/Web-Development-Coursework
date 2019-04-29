console.log("conected")

/* 
1. Higher order function that applies callback for all elemnts in the array
2. callback checks if value from calback is truthy
  - if value is truthy return array index of that element and end function.
  - if value is never truthy return -1 
*/
let arr = [NaN, "", "derek", -4, 0, -6];
let arr2 = [NaN, "", "", -0, 0, -0];

function isTruthy(currentElement) {
//    console.log(!!currentElement);
   return !!currentElement;
}

// isTruthy("");

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return console.log("Index is "+ i + " and value is " + array[i]);
        }
    }
    console.log("-1 , No truthy values");
}

findIndex(arr2, isTruthy);