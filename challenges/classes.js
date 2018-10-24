// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() { return this.length * this.width * this.height; }
  surfaceArea() { return (2 * (this.length * this.width + this.width * this.height + this.height * this.length))}
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(length) {
    super(length)
  }
}

const cube = new CubeMaker(3);
console.log(cube.volume()); //27
console.log(cube.surfaceArea()); //54