/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let el of elements) {
    cb(el, elements.indexOf(el));
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
  let mapped = [];
  for (let el of elements) {
    mapped.push(cb(el));
  }
  return mapped;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  let count = 0;
  function newCounter() {
    count++;
    return count;
  }
  // newCounter(); // 1
  // newCounter(); // 2
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  // cb could have more than one arg
  	// must convert arguments object into an iterable array
  return (...args) => {
  	if (count === n) {
  		return null;
  	}
  	count++;
  	// call cb with less args
  	return cb(...args);
  }
};

/* ======================== Prototype Practice ============================ */

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height
// Parent object
// function CuboidMaker (attributes) {
// 	// properties of a cuboid
// 	this.length = attributes.length;
// 	this.width = attributes.width;
// 	this.height = attributes.height;
// }

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height
// CuboidMaker.prototype.volume = function() {
// 	return (this.length * this.width * this.height);
// }
// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)
// CuboidMaker.prototype.surfaceArea = function() {
// 	return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }
// Create a cuboid object that inherits from CuboidMaker. 
// The cuboid object must contain keys for length, width, and height.
// function Cuboid (options) {
// 	// link Cuboid to its parent
// 	CuboidMaker.call(this, options);
// }
// give Cuboid access to its parent's prototype
// Cuboid.prototype = Object.create(CuboidMaker.prototype);

// CHALLENGE ONE: extend cube with pseudo-classical inheritance
// function Cube(cubeOptions) {
// 	// link Cube to CuboidMaker
// 	CuboidMaker.call(this, cubeOptions);
// }

// Cube.prototype.volume = function () {
// 	return this.length * this.height * this.width;
// }

// Cube.prototype.surfaceArea = function () {
// 	return 6 * (this.length + this.width);
// }

// const cube = new Cube ({
// 	length: 2,
// 	width: 2,
// 	height: 2
// });
// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130. 
// const cuboid = new Cuboid ({
// 	length: 4,
// 	width: 5,
// 	height: 5
// });
// Use these logs to test your results:
// console.log(`volume: ${cuboid.volume()}`); // 100
// console.log(`surfaceArea: ${cuboid.surfaceArea()}`); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
class CuboidMaker {
	constructor(attributes) {
		// properties of a cuboid
		this.length = attributes.length;
		this.width = attributes.width;
		this.height = attributes.height;
	}
	// methods in CuboidMaker prototype
	volume() {
		return (this.length * this.width * this.height);
	}
	surfaceArea() {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	}
}
// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
class Cube extends CuboidMaker {
	constructor(options) {
		// link to parent
		super(options);
		this.isCube = options.isCube;
	}
	// methods in Cube prototype
	volume() {
		return this.length * this.height * this.width;
	}
	surfaceArea() {
		return 6 * (this.length + this.width);
	}
	// CHALLENGE 2: add isCube method
	checkIfCube() {
		if (this.isCube) {
			return 'We have a cube!';
		}
		return 'This is not a cube!';
	}
}
// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
// The surface area of a cube is: 6 * (length + width)

// Create a new cube object that has equal values for length, width, and height 
// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24. 
const cube = new Cube ({
	length: 2,
	width: 2,
	height: 2,
	isCube: true
});

const cuboid = new CuboidMaker ({
	length: 4,
	width: 5,
	height: 5
});
// Use these logs to test your results:
// console.log(`volume: ${cuboid.volume()}`); // 100
// console.log(`surfaceArea ${cuboid.surfaceArea()}`); // 130
// console.log(`volume: ${cube.volume()}`); // 8
// console.log(`surfaceArea ${cube.surfaceArea()}`); // 24

/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax

// Use these logs to test your results:
// console.log(`volume: ${cuboid.volume()}`); // 100
// console.log(`surfaceArea: ${cuboid.surfaceArea()}`); // 130
// console.log(`volume: ${cube.volume()}`); // 8
// console.log(`surfaceArea: ${cube.surfaceArea()}`); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';

// Use these logs to test your results:
// console.log(`volume: ${cuboid.volume()}`); // 100
// console.log(`surfaceArea: ${cuboid.surfaceArea()}`); // 130
// console.log(`volume: ${cube.volume()}`); // 8
// console.log(`surfaceArea: ${cube.surfaceArea()}`); // 24
// console.log(`isCube: ${cube.checkIfCube()}`);  // "We have a cube!"

// Challenge 3: Recursion
const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  	// nested objects can exist
  // otherwise return false

  // gather all obj props in leaves
  const leaves = [];
  // iterate through object and compare props
  const checkBranches = (object) => {
    let keys = Object.keys(object);
    keys.forEach((key) => {
    	// base case: value is not an obj
    	if (typeof object[key] !== 'object') {
    		leaves.push(object[key]);
    	}
    	// recursive case: nested obj found
    		// call checkBranches with this obj to pull out its props
    	else if (typeof object[key] === 'object') {
    		return checkBranches(object[key]);
    	}
    });
  } 
  checkBranches(obj);
  // iterate over leaves arr which contains values from obj
  let bool = true;
  // compare vals in leaves to see if they are the same
  leaves.reduce((a, b) => {
   if (a !== b) {
   	bool = false;
   }
   return a;
  });
  // output: val of bool describing if vals in obj are the same
  return bool;
};


module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
};
