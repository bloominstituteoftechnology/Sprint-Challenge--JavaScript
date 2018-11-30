// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClassSyntax {
  constructor (length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume () {
    return this.length * this.width * this.height;
  }
  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboidClassSyntax = new CuboidMakerClassSyntax (4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClassSyntax.volume()); // 100
console.log(cuboidClassSyntax.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClassSyntax {
  constructor (side) {
    super (side);
    this.side = side;
    // I don't think these are necessary but the way I read the instructions makes it seem like I should include for later.
    this.length = side;
    this.width = side;
    this.height = side;
  }
  // volume and surfaceArea methods are written first in the way you would calculate for a cube (where length === width === height). I read the instructions to indicate that I should use the length, width, height properties inherited from CuboidMaker to do the calculation, these are provided second also work, simply comment the cube-method and un-comment the cuboid method.
  volume () {
    // cube method follows:
    return this.side ** 3;
    // the formula from CuboidMaker also works: 
    // return this.length * this.width * this.height;
  }
  surfaceArea () {
    // cube method follows:
    return 6 * this.side ** 2;
    // the formula from CuboidMaker also works: 
    // return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cube = new CubeMaker(3);
console.log(cube);
console.log(cube.volume());
console.log(cube.surfaceArea());