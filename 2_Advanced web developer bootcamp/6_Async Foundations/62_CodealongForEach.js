//Using for loop
let arr = [1, 2, 3, 4, 5, 6];

function double(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * 2);
    }
}

// double(arr);

//Custom forEach

//Function to double a number
function doubleCB(currentElement, currentIndex, array) {
    console.log(currentElement * 2);
}

//higher order function to aply previous function to every elemrnt in array
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

myForEach(arr, doubleCB);