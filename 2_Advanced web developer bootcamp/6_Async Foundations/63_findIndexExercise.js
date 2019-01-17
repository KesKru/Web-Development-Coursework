let x;
let arr = [1, 2, 3, 4, 5, 6];


//Using for loop
function double(arr) {
    x = [];
    for (let i = 0; i < arr.length; i++) {
        x.push(arr[i] * 2);
    }
    return x;
}

double(arr);

//Using for each

console.log(x);