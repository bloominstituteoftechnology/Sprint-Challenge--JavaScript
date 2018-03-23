/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* ======================== Prototype Practice ============================ */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height
const CuboidMaker = function CuboidMaker(options) {
  this.height = options.height;
  this.width = options.width;
  this.length = options.length;
};

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height
CuboidMaker.prototype.volume = function volume() {
  return this.height * this.length * this.width;
};

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)
CuboidMaker.prototype.surfaceArea = function surfaceArea() {
  return 2 * (this.length * this.height + this.width * this.length + this.width * this.height);
};

/* ======================== Class Practice ============================ */

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
class Cuboid {
  constructor(options) {
    // Implement this constructor
    this.height = options.height;
    this.length = options.length;
    this.width = options.width;
  }
  volume() {
    // Implement this function
    return this.height * this.length * this.width;
  }
  surfaceArea() {
    // Implement this function
    return 2 * (this.length * this.height + this.width * this.length + this.width * this.height);
  }
}
// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.
class Cube extends Cuboid{ // Be sure to use `extends` to extend the Cuboid class
  constructor(options) {
    // Use the parent constructor
    super(options);
  }
  isCube() {
    return 'We have a cube!';
  }
}

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax
const CubeMaker = function CubeMaker(options) {
  // Call the parent constructor
  CuboidMaker.call(this, options);
};

// Set up inheritance by linking the prototype to its parent.
CubeMaker.prototype = Object.create(CuboidMaker.prototype);

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';

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
  CuboidMaker,
  CubeMaker,
  Cuboid,
  Cube
};
