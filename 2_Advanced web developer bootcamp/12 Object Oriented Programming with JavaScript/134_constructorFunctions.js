
// Constructor function. They are capitalized
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
//  Constructor funtions to create new object should be used with new keyword.
//  new keyword does the folowing
// 1. Creates new empty object
// 2. Sets keyword this to be that empty object
// 3. adds the line return this to the end of the function
// 4. adds __proto__ (dunder proto) property on new object. This property linkes to the to prototype property on the constructor function.
let firstHouse = new House(2, 2, 2500);

// -----------------------------------------------

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log(this.name + " just barked !");
    }
}

let rusty = new Dog("Rusty", 3);
let fido = new Dog("Fido", 1);

rusty.bark()
// Rusty just barked !
fido.bark()
// Fido just barked !

// -----------------------------------------------

// Reducing code duplication


// a lot of duplication , not good.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWeels = 4;
}
function MotorcycleBad(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWeels = 2;
}

// reusing code from Car constructor in Motorcycle.


function MotorcycleRefactored(make, model, year) {
    // Car.call(this, make, model, year);
    Car.apply(this, arguments);
    this.numWeels = 2;
}