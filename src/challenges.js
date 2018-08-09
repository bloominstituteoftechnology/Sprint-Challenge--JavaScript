/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
  cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
  const newVal = [];
  for (let i = 0; i < elements.length; i++) {
    const resultof = cb(elements[i], i);
    newVal.push(resultof);
  }
  return newVal;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let ncounter = 0;
  return () => {
    ncounter++;
    return ncounter;
  };
};
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let cbCount = 0;
  return (...arg) => {
    if (cbCount === n) return null;
    cbCount++;
    return cb(...arg);
  };
};

/* ======================== Prototype Practice ============================ */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height
const CuboidMaker = function CuboidMaker(options) {
  this.length = options.length;
  this.width = options.width;
  this.height = options.height;
};

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height
CuboidMaker.prototype.volume = function volume() {
  return  `${this.length * this.width * this.height}`;
};

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)
CuboidMaker.prototype.surfaceArea = function surfaceArea() {
  return `${(this.length * this.width + this.length * this.height + this.width * this.height) * 2}`;
};

/* ======================== Class Practice ============================ */
// const CuboidMaker = function CuboidMaker(options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
// };
// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
class Cuboid {
  constructor(Cuboidoptions) {
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
    // Implement this constructor
  }
  volume() {
    return `${this.length * this.width * this.height}`;
    // Implement this function
  }
  surfaceArea() {
    return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
    // Implement this function
  }
};
// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.
class Cube extends Cuboid{
  constructor(Cubeoptions) {
    super(Cuboidoptions)
    // Use the parent constructor
  }
  volume() {
    return `${this.length * this.width * this.height}`;
    // Implement this function
  }
  surfaceArea() {
    return `${(this.length * this.width + this.length * this.height + this.width * this.height) * 2}`;
    // Implement this function
  }
};

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax
const CubeMaker = function CubeMaker(options) {
  // Call the parent constructor
};

// Set up inheritance by linking the prototype to its parent.
// CubeMaker.prototype = null;

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!'; NOTE: Comment our your prototype code so you don't have conflicting names!

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
