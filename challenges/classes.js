// 1. Copy and paste your prototype in here and refactor into class syntax.

class IShapeMaker3d { // Interface for making shapes

  constructor() {



  }

  getVolume() {



  }

  getSurfaceArea() {



  }

}

class CuboidMaker extends IShapeMaker3d {

  constructor(length, width, height) {

    super();

    this.length = length;
    this.width = width;
    this.height = height;

  }

  getVolume() {

    return this.length * this.width * this.height;

  }

  getSurfaceArea() {

    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);

  }

}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.getVolume()); // 100
console.log(cuboid.getSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// this makes no sense, because a cube is not a derivative of a cuboid. These classes would not share anything.
class CubeMaker extends IShapeMaker3d {

  constructor(sideLength) {

    super();

    this.sideLength = sideLength;

  }

  getVolume() {

    return Math.pow(this.sideLength, 3);

  }

  getSurfaceArea() {

    return 6 * this.sideLength * this.sideLength;

  }

}

const cube = new CubeMaker(3);

console.log(cube.getVolume());
console.log(cube.getSurfaceArea());
