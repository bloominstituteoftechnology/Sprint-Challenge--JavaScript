/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  elements.forEach(function (item) {
    let i = 0;
    return cb(item, elements[i]);
    i++;
  })
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
  let newArray = elements.map(item => cb(item));
  return newArray;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  return count++;
};


const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // make a counter to compare to n. 
  // As long as counter is less than or equal to n, invoke cb. 
};

/* ======================== Prototype Practice ============================ */

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height
// function Cuboid(length, width, height) {
//   this.length = length;
//   this.width = width;
//   this.height = height;
//   this.volume = function() {
//     return this.length * this.width * this.heigth;
//   };
//   this.surfaceArea = function() {
//     return 2(this.length * this.width + this.length * this.height + this.width * this.height)
//   };
// }

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Rows 52 - 54
this.volume = function() {
  return this.length * this.width * this.heigth;
};

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)
// Rows 55-57
this.surfaceArea = function() {
  return 2(this.length * this.width + this.length * this.height + this.width * this.height)
};

// ***Create a cuboid object that inherits from CuboidMaker. 
// ***The cuboid object must contain keys for length, width, and height.
let cuboid = new Cuboid( {
  width: 5,
  width: 5,
  height: 5,
});

// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130. 

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
// NOTE: Comment our your prototype code above so you don't have conflicting names!

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.heigth;
  }
  surfaceArea() {
    return 2(this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
class Cube extends CuboidMaker {
  constructor(cubeAttributes){
    super(cubeAttributes)
  }
}

const cuteCube = new Cube({
  length: 4,
  width: 5,
  height: 5,
})

// Create a new cube object that has equal values for length, width, and height 
const cuterCube = new Cube({
  length: 2,
  width: 2,
  height: 2,
})
// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24. 

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24
// console.log(cube.checkIfCube());  // "We have a cube!"

// Challenge 3: Recursion
const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
};
