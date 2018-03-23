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
  const out = [];
  each(elements, val => out.push(cb(val)));
  return out;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let cur = 0;
  return (...args) => (cur++ >= n ? null : cb(...args));
};

/* ======================== Prototype Practice ============================ */

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides.

// Create a CuboidMaker constructor function that accepts properties for length, width, and height

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height.
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)

// Create a cuboid object that inherits from CuboidMaker.
// The cuboid object must contain keys for length, width, and height.

// function CuboidMaker(options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
// }

// CuboidMaker.prototype = {
//   surfaceArea() {
//     return (
//       2 *
//       (this.length * this.width +
//         this.length * this.height +
//         this.width * this.height)
//     );
//   },

//   volume() {
//     return this.length * this.height * this.width;
//   }
// };
// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130.
// const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });
// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
// class CuboidMaker {
//   constructor(options) {
//     this.length = options.length;
//     this.width = options.width;
//     this.height = options.height;
//   }

//   surfaceArea() {
//     return (
//       2 *
//       (this.length * this.width +
//         this.length * this.height +
//         this.width * this.height)
//     );
//   }

//   volume() {
//     return this.length * this.height * this.width;
//   }
// }

// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
// class Cube extends CuboidMaker {
//   constructor(options) {
//     super(options);
//   }
//   volume() {
//     return this.length * this.width * this.height;
//   }
//   surfaceArea() {
//     return 6 * (this.length + this.width);
//   }
// }

// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
// The surface area of a cube is: 6 * (length + width)

// Create a new cube object that has equal values for length, width, and height
// let cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });
// let cube = new Cube({ length: 2, width: 2, height: 2 });

// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24.
// Use these logs to test your results:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

/* ======================== Stretch Challenges ============================ */

// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax
function CuboidMaker(options) {
  this.length = options.length;
  this.width = options.width;
  this.height = options.height;
}

CuboidMaker.prototype = {
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  },

  volume() {
    return this.length * this.height * this.width;
  }
};

function Cube(options) {
  CuboidMaker.call(this, options);
}
Cube.prototype = Object.create(CuboidMaker.prototype);
Cube.prototype.constructor = Cube;

Cube.prototype.surfaceArea = function() {
  console.log(this.height);
  return 6 * (this.length + this.height);
};

// Use these logs to test your results:
let cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });
let cube = new Cube({ length: 2, width: 2, height: 2 });
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';
Cube.prototype.checkIfCube = function() {
  return this instanceof Cube ? 'We have a cube!' : '';
};
// Use these logs to test your results:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24
console.log(cube.checkIfCube()); // "We have a cube!"

// the hard part
const flattenHelper = (nestedObject, curKey, toReturn) => {
  // somehow refactor this mess
  if (typeof nestedObject[curKey] === 'object' && nestedObject[curKey]) {
    // flatten the object
    const flatObject = flattenObject(nestedObject[curKey]);
    // add that flattened object back into the main object
    Object.keys(flatObject).map(key => (toReturn[key] = flatObject[key]));
  } else toReturn[curKey] = nestedObject[curKey];

  return toReturn;
};

const flattenObject = nestedObject => {
  return Object.keys(nestedObject).reduce(
    (toReturn, curKey) => flattenHelper(nestedObject, curKey, toReturn),
    {}
  );
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false

  // flatten object
  const flat = flattenObject(Object.assign({}, obj));

  // Set makes this part easy
  const t = new Set(Object.values(flat));

  if (t.size === 1) return true;
  return false;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves
};
