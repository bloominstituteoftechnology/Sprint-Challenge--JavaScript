// Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

// function Cuboid(length, width, height) {
  // this.length = length;
  // this.width = width;
  // this.height = height;
// }

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

// Cuboid.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// Look at Step 1 for the answer!!!

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

// Cuboid.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

// Look at Step 1 for the answer!!!

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid = new Cuboid(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

// In a cube, length, width, & height are the same

/*
> Because all faces are squares and congruent to each other, all 12 edges are the same length [...].

Cube - math word definition - Math Open Reference
https://www.mathopenref.com/cube.html
*/

// So could we do something like this?

class Cube extends Cuboid {
  constructor(edge) {
    super(edge, edge, edge);
    this.edge = edge;
  }
  // Wouldn't our existing methods be satisfactory? Hmm
  // Let's make methods anyways
  cubeVolume() {
    return Math.pow(this.edge, 3);
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.edge, 2);
  }
}

const companionCube = new Cube(5);

console.log(companionCube.length);
console.log(companionCube.width);
console.log(companionCube.height);

// Methods from our base class
console.log(companionCube.volume());
console.log(companionCube.surfaceArea());
// Methods from our extended class
console.log(companionCube.cubeVolume());
console.log(companionCube.cubeSurfaceArea());
// Yeah they're the same. What was the point of that? XD