/* //creating new promise with promise constructor. Promises passes data to next function when it is resolved or rejected.
let promise1 = new Promise(function (resolve, reject) {
    // data to pass thrue when resolved
    resolve([1, 2, 3, 4, 5]);
    // data to pass thrue when rejected
    reject()
});

// data from promise resolve goes to .then as its callback parameter.
promise1.then(function (dataFromPromiseResolve) {
    console.log("promise1 was resolved with data " + dataFromPromiseResolve);
// data from promise reject goes to .catch as its callback parameter.
}).catch(function (dataFromPromiseReject) {
    console.log("promise1 was rejected with data " + dataFromPromiseReject);
}); */

////----------------------------------

let promise2 = new Promise(function (resolve, reject) {
    let num = Math.random();
    if (num > 0.5) {
        resolve(num);
    } else {
        reject(num);
    }
});

// simple promise handling
// promise2.then(function (dataFromPromiseResolve) {
//     console.log("promise1 was resolved with data " + dataFromPromiseResolve);
// }).catch(function (dataFromPromiseReject) {
//     console.log("promise1 was rejected with data " + dataFromPromiseReject);
// });

// promise methods can also be chained
promise2.then(function (dataFromPromiseResolve) {
    console.log("promise1 was resolved with data " + dataFromPromiseResolve);
// need to return value for the next step
    return dataFromPromiseResolve;
// chaining promise
}).then(function (dataFromPromiseResolve) {
    console.log("next step for data " + dataFromPromiseResolve);
}).catch(function (dataFromPromiseReject) {
    console.log("promise1 was rejected with data " + dataFromPromiseReject);
});