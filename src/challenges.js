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
  var newArr = [];
  for (let i = 0; i < elements.length ; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  const newCounter = counter();
  return newCounter(count++);
};
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  };
};

/* ======================== Prototype Practice ============================ */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height
const CuboidMaker = function CuboidMaker(options) {
};

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height
CuboidMaker.prototype.volume = function volume() {
};

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)
CuboidMaker.prototype.surfaceArea = function surfaceArea() {
};

// PROTOTYPE ======================================================================================

function CuboidMaker(dimension) {
  this.length = dimension.length;
  this.width = dimension.width;
  this.height = dimension.height;
}

CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};

function CuboidObject(cuboidDimensions) {
  CuboidMaker.call(this, cuboidDimensions);
}

function Cube(cubeDimensions) {
  CuboidMaker.call(this, cubeDimensions);
}

Cube.prototype = Object.create(CuboidMaker.prototype);

Cube.prototype.surfaceArea = function() {
  return 6 * this.height * this.width;
};

let cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

let cube = new Cube({
  length: 2,
  width: 2,
  height: 2
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24

/* ======================== Class Practice ============================ */

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
class Cuboid {
  constructor(options) {
    // Implement this constructor
  }
  volume() {
    // Implement this function
  }
  surfaceArea() {
    // Implement this function
  }
}
// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.
class Cube { // Be sure to use `extends` to extend the Cuboid class
  constructor(options) {
    // Use the parent constructor
  }
}

// CLASS =============================================================================================

class CuboidMaker {
  constructor(dimension) {
  this.length = dimension.length;
  this.width = dimension.width;
  this.height = dimension.height;
}

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class Cube extends CuboidMaker {
  constructor(cubeDimensions) {
    super(cubeDimensions)
    this.isCube = cubeDimensions.isCube;
  }

  checkIfCube () {
    if(this.isCube){
      return 'We have a cube!';
    }
  }
}


let cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

let cube = new Cube({
  length: 2,
  width: 2,
  height: 2,
  isCube: true
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24
console.log(cube.checkIfCube());  // "We have a cube!"

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
