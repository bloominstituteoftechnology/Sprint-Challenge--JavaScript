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
  for (let i = 0; i < elements.length; i++) {
    elements[i] = cb(elements[i]);
  }
  return elements;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    return ++count;
  };
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

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)

// Create a cuboid object that inherits from CuboidMaker. 
// The cuboid object must contain keys for length, width, and height.

// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130. 

function CuboidMaker(options) {
  this.length = options.length;
  this.width = options.width;
  this.height = options.height;
}

CuboidMaker.prototype.volume = function volume() {
  return this.length * this.width * this.height;
}

CuboidMaker.prototype.surfaceArea = function surfaceArea() {
  return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
}

function Cube(options) {
  CuboidMaker.call(this, {
    length: options.sideLength,
    width: options.sideLength,
    height: options.sideLength
  });
}

Cube.prototype.surfaceArea = function surfaceArea() {
  return 6 * this.height * this.width;
}

Cube.prototype.isCube = function isCube() {
  if (this.height === this.width && this.width === this.length) {
    return 'We have a cube!';
  }
  return 'No cube here.';
}

let cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Use these logs to test your results:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax. NOTE: Comment our your prototype code above so you don't have conflicting names!

// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.

// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
// The surface area of a cube is: 6 * (length + width)

// Create a new cube object that has equal values for length, width, and height 

// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24. 

class CuboidMakerClass {
  constructor(options) {
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
  }
}

class CubeClass extends CuboidMakerClass {
  constructor(options) {
    super({
      length: options.sideLength,
      width: options.sideLength,
      height: options.sideLength
    });
  }
  surfaceArea() {
    return 6 * this.length * this.width;
  }
  checkIfCube() {
    if (this.length === this.width && this.width === this.height) {
      return 'We have a cube!';
    }
    return 'No cube here.';
  }
}

let cube = new CubeClass({
  sideLength: 2
});

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax. NOTE: Comment our your class code so you don't have conflicting names!

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!'; NOTE: Comment our your prototype code so you don't have conflicting names!

// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24
// console.log(cube.checkIfCube());  // "We have a cube!"

// Challenge 3: Recursion
const checkMatchingLeaves = (obj, comparator) => {
  let values = Object.values(obj);
  if (comparator === undefined) {
    comparator = values.filter(val => typeof val !== 'object')[0];
  }

  return Object.values(obj).every(val => {
    if (typeof val === 'object') {
      return checkMatchingLeaves(val, comparator);
    }
    return val === comparator;
  });
};


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
};
