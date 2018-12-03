console.log("hello!!");



function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
    i, k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

function transposeArray(array, arrayLength) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push([]);
  };

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < arrayLength; j++) {
      newArray[j].push(array[i][j]);
    };
  };

  return newArray;
}


let Arr = [
  "1", "2", "3",
  "A", "B", "C",
  "11", "22", "33",
  "AA", "BB", "CC"
];


// Split into sub arrays

let divide = Arr.length / (Arr.length / 3)
let Arr2 = listToMatrix(Arr, divide);

console.log(Arr2);

// Flip matrix

let Arr3 = transposeArray(Arr2, Arr2.length);

// Flatten back into 1 dimensional array

Arr3 = [].concat.apply([], Arr3);

console.log(Arr3);
