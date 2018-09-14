// 1. Copy and paste your prototype in here and refactor into class syntax.
const CuboidMaker = cuboid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  constructor(dimensions) {
    this.length = dimensions.length;
    this.width = dimensions.length;
    this.height = this.height;

  }

  CuboidMaker.prototype.make = function () {
    return `Hello, I havea length, height, and width of ${this.length} , ${this.height} , ${this.width}`;
  };
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
