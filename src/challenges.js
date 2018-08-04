
/* eslint-disable */
/* ======================== CallBacks Practice ============================ */
// let myArr = [1, 2, 3, 4]

const each = (elements, cb) => { // the forEach function! 
  for (let i = 0; i < elements.length; i++) {// Iterates over a list of elements, yielding each in turn to the `cb` function.
    cb(elements[i], i);
  }// This only needs to work with arrays.
};
// each(myArr); 
const map = (elements, cb) => { // the map function!
  const newArr = []; // Produces a new array of values by mapping each value in list through a transformation function.
  for (let i = 0; i < elements.length; i++) { // or each(elements, item =>(newArr.push(item)))
    newArr.push(cb(elements[i]));
  }
  return newArr; // Return the new array.
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  let count = 0;
  return () => { // or return () => (++count);
    count++;
    return count;
  };// Return a function that when invoked increments and returns a counter variable.
};

// Example: const newCounter = counter();
newCounter = counter(); // newCounter declared 
newCounter(); // 1st call => 1
newCounter(); // 2nd call => 2

const limitFunctionCallCount = (cb, n) => {
  let timesInvoked = 0;
  return (...args) => { // Should return a function that invokes `cb`.
    if (timesInvoked === n) { // The returned function should only allow `cb` to be invoked `n` times.
      return null;
    }
    timesInvoked++;
    return cb(...args);
  };
};

/* ======================== Prototype Practice ============================ */

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height
function CuboidMaker(att) {
  this.length = att.length;
  this.height = att.height;
  this.width = att.width;
}
// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height
CuboidMaker.prototype.cuboidVol = function () {
  return this.length * this.width * this.height; // or return `Volume {$this.length*this.height*this.width}`
}

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)
CuboidMaker.prototype.cuboidSurfArea = function () {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}
// Create a cuboid object that inherits from CuboidMaker.
CuboidObj.prototype = Object.create(CuboidMaker.prototype);
// The cuboid object must contain keys for length, width, and height.
function CuboidObj(cuboidObjAtt) {
  CuboidMaker.call(this, cuboidObjAtt);
  this.isCuboidObj = cuboidObjAtt.isCuboidObj;
}

// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130. 
const cuboid = new CuboidObj({
  length: 4,
  width: 5,
  height: 5,
});
// Use these logs to test your results:
console.log(cuboid.cuboidVol()); // 100
console.log(cuboid.cuboidSurfArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
class Cuboid {
  constructor(att) {
    this.length = att.length;
    this.height = att.height;
    this.width = att.width;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
class Cube extends Cuboid {
  constructor(cubeAtt) {
    super(cubeAtt)
    this.isCube = cubeAtt.isCube;
  }
}
// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
Cube.prototype.volume = function () {
  return this.length * this.width * this.height;
}
// The surface area of a cube is: 6 * (length + width)
Cube.prototype.surfaceArea = function () {
  return this.length * this.width * this.height;
}
// Create a new cube object that has equal values for length, width, and height 
const cube = new Cube({
  length: 2,
  width: 2,
  height: 2,
});
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
