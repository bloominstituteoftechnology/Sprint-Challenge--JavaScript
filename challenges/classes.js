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
  constructor(params) {
    this.length = params.length;
    this.width = params.width;
    this.height = params.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

let cuboid = new CuboidMaker({
  "length" : 4,
  "width" : 5,
  "height" : 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(paramsCuboid) {
    super(paramsCuboid);
    // Let's give our cube a name
    this.name = paramsCuboid.name;
  }
  volume() {
    console.log("Child element");
    return this.height * this.height * this.height;
  }
  surfaceArea() {
    return 6 * (this.height * this.height);
  }
}

let bob = new CubeMaker({
  "length" : 4,
  "width" : 5,
  "height" : 5,
  "name" : "Bob"
});

console.log(bob.volume());
console.log(bob.surfaceArea());
