// Copy and paste your prototype in here and refactor into class syntax.
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
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

let cuboid = new CuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(side) {
    super(); // No arguments passed because we are not defining length, width or height
    this.side = side; // Value for one side of cube
  }

  volume() {
    return this.side * this.side * this.side;
  }

  surfaceArea() {
    return 6 * (this.side * this.side);
  }
}

let cube = new CubeMaker(5);
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150