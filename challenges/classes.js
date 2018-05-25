// Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker (length, width, height) {
//   this.length = length;
//   this.width = width;
//   this.height = height;
// }
//
// CuboidMaker.prototype.volume = function () {
//   return this.length * this.width * this.height;
// }
//
// CuboidMaker.prototype.surfaceArea = function () {
//   return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
// }

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

let cuboid = new CuboidMaker(4,5,5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(length, width, height, name) {
    super(length, width, height);
    // Let's give our cube a name
    this.name = name;
  }
  volume() {
    console.log("Child element");
    return this.height * this.height * this.height;
  }
  surfaceArea() {
    return 6 * (this.height * this.height);
  }
}

let bob = new CubeMaker(5,5,5, "Bob");

console.log(bob.volume());
console.log(bob.surfaceArea());
