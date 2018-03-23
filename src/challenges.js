/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {  //---------------------------------------------------------------------------------------------------------------completed
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // iterate over the elements array
  // pass each array element into the call back function
};

const map = (elements, cb) => { //-----------------------------------------------------------------------------------------------------------------completed
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
  let cbArr = [];
  for (let i = 0; i < elements.length; i++) {
    cbArr.push(cb(elements[i]));
  }
  return cbArr;
};
/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {  //---------------------------------------------------------------------------------------------------------------------------completed
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let total = 0; 
  return () => ++total;
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

const limitFunctionCallCount = (cb, n) => {  //--------------------------------------------------------------------------------------------------------------completed
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

function CuboidMaker(length, width, height) { //---------------------------------------------------------------------------- completed
  this.length = length;
  this.width = width;
  this.height = height;
  this.volume = function() {
    return (this.length * this.width * this.height);
  }
}

CuboidMaker.prototype.Volume = function() {
  return (this.length * this.width * this.height);
}

CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

let cuboid = new CuboidMaker(12, 24, 34);


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
class ClassCuboidMaker {
  constructor(sizes) {
    this.length = sizes.length;
    this.width = sizes.width;
    this.height = sizes.height;
  }
  volume(length, width, height) {
    return (this.length * this.width * this.height);
  }
  surfaceArea(length, width, height) {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
};

class ClassCube extends ClassCuboidMaker {
  constructor(sizes) {
    super(sizes);
  }
  cubeVolume(length, width, height) {
    return (this.length * this.width * this.height);
  }
  cubeSurfaceArea(length, width, height) {
    return 6 * (this.length + this.width);
  }
};

let secondCube = new ClassCube({
  length: 2, 
  width: 2,
  height: 2,
});

// Use these logs to test your results:
 console.log(secondCube.volume()); // 8
 console.log(secondCube.surfaceArea()); // 24

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
