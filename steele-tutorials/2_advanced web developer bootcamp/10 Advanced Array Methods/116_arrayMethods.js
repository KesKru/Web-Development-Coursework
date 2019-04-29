console.log("connected !");

////------------------advanced array methods---------------------////

//// array.forEach(function(value, index, arr), thisValue) , forEach always return undefined. If you want to return something need to create variable outside of it and them modify that variable in it.

let arr = [1, 2, 3, 4, 5];

arr.forEach(function (value, index, arr) {
    console.log(value * 2);
});
// undefined

//// array.map(function(value, index, arr), thisValue) 
//	An Array containing the results of calling the provided function for each element in the original array.

arr.map(function (value, index, arr) {
    return value * 2;
});
// [2, 4, 6, 8, 10];


//// array.filter(function(currentValue, index, arr), thisValue)
// An Array containing all the array elements that pass the test. If no elements pass the test it returns an empty array.

arr.filter(function (value, index, arr) {
    return value > 2;
});
// [3, 4, 5]


//// array.some(function(currentValue, index, arr), thisValue)
// A Boolean. Returns true if any of the elements in the array pass the test, otherwise it returns false

arr.some(function (value, index, arr) {
    return value > 2;
});
// true 

//// array.every(function(currentValue, index, arr), thisValue)
// A Boolean. Returns true if all the elements in the array pass the test, otherwise it returns false

arr.every(function (value, index, arr) {
    return value > 2;
});
// false 

//// array.reduce(function(accumulator, nextValue, currentIndex, arr), initialValue)
// Returns the accumulated result from the last call of the callback function

arr.reduce(function (accumulator, nextValue, currentIndex, arr) {
    return accumulator + nextValue;
});
// 15

