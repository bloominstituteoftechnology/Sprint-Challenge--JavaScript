/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    (cb(elements[i], i));
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i]));
  }
  return arr;
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
    count++;
    return count;
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  function CallCount(...args) {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  }
  return CallCount;
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

// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130. 
function CuboidMaker(dimensions) {
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.volume = function() {return this.length * this.height * this.width};
    this.surfaceArea = function() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};
}
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});
// Use these logs to test your results:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax

// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.

// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
// The surface area of a cube is: 6 * (length + width)

// Create a new cube object that has equal values for length, width, and height 

// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24. 
class CuboidMaker {
  constructor(dimensions) {
    this.length = dimensions.length
    this.width = dimensions.width
    this.height = dimensions.height
  }
  volume() {
   return this.length * this.height * this.width;
  }
  surfaceArea() {
     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
class Cube extends CuboidMaker {
  constructor(cubeDimensions) {
  super(cubeDimensions);
  }
  volume() {
    return this.length * this.width * this.height; //I've misspelled length so many times and keep wondering where my NaN error comes from 
  } // volume for cube 
  surfaceArea() {
    return 6 * (this.length + this.width); //surface area for cube
  }
}
const cube = new Cube({ // new cube utilizing Cube class
  length: 2,
  width: 2,
  height: 2,
})
const cuboid1 = new CuboidMaker({ //used cuboid1 eslint error as cuboid was taken in previous prototype practice 
  length: 4,
  width: 5,
  height: 5,
})
// Use these logs to test your results:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax
function CuboidMaker(dimensions) {
  this.length = dimensions.length;
  this.width = dimensions.width;
  this.height = dimensions.height;
  this.volume = function() {return this.length * this.height * this.width};
  this.surfaceArea = function() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};
}
function Cube(cubeDimensions) {
  CuboidMaker.call(this, cubeDimensions);
  this.isCube = cubeDimensions.isCube;
  this.volume = function() {return this.length * this.height * this.width};
  this.surfaceArea = function() {return 6 * (this.length + this.width)};

}
Cube.prototype = Object.create(CuboidMaker.prototype);

const cube2 = new Cube({ // new cube utilizing Cube class
  length: 2,
  width: 2,
  height: 2,
})
const cuboid2 = new CuboidMaker({ //used cuboid1 eslint error as cuboid was taken in previous prototype practice 
  length: 4,
  width: 5,
  height: 5,
})
// Use these logs to test your results:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(cube2.volume()); // 8
console.log(cube2.surfaceArea()); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';
class CuboidMaker {
  constructor(dimensions) {
    this.length = dimensions.length
    this.width = dimensions.width
    this.height = dimensions.height
  }
  volume() {
   return this.length * this.height * this.width;
  }
  surfaceArea() {
     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
class Cube extends CuboidMaker {
  constructor(cubeDimensions) {
  super(cubeDimensions);
  this.isCube = cubeDimensions.isCube
  }
  checkIfCube(){
   if(this.isCube){
     return "We have a cube!";
   }
  }
  volume() {
    return this.length * this.width * this.height; //I've misspelled length so many times and keep wondering where my NaN error comes from 
  } // volume for cube 
  surfaceArea() {
    return 6 * (this.length + this.width); //surface area for cube
  }
}
const cube3 = new Cube({ // new cube utilizing Cube class
  length: 2,
  width: 2,
  height: 2,
  isCube: true, //additon to return string 
})
const cuboid3 = new CuboidMaker({ //used cuboid3 eslint error as cuboid(#) was taken in previous prototype practice 
  length: 4,
  width: 5,
  height: 5,
})
// Use these logs to test your results:
console.log(cuboid3.volume()); // 100
console.log(cuboid3.surfaceArea()); // 130
console.log(cube3.volume()); // 8
console.log(cube3.surfaceArea()); // 24
console.log(cube3.checkIfCube());  // "We have a cube!"

// Challenge 3: Recursion
const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let result = true;
  const leaves = [];
  const check = (objGiven) => {
    Object.keys(objGiven).forEach((key) => {
     if (typeof objGiven[key] === 'number' || typeof objGiven[key] === 'string') {
        leaves.push(objGiven[key]);
      }
      if (typeof objGiven[key] === 'object') {
        check(objGiven[key]);
      }
    });
  };
  check(obj);
  leaves.reduce((para, i) => {
    if (para !== i) {
      result = false;
    }
    return i;
  });
  return result;
};


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
};
