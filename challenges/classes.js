console.log("-CLASSES-");
console.log("");

// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerX {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
      return this.length * this.width * this.height;
  }
  surfaceArea() {
      return(2 * (this.length * this.width * this.height));
    }
  }

var cuboid = new CuboidMakerX(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Volume Task: ", cuboid.volume()); // 100
console.log("");
console.log("Surface Area Task: ", cuboid.surfaceArea()); // 130
console.log("");

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class cubeMaker extends CuboidMakerX {
  constructor(dimension) {
    super(dimension, dimension, dimension);
  }
  volume() {
    return Math.pow(this.width, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.width, 2);
  }
}

const myCube = new cubeMaker(4);
console.log("Stretch:")
console.log("");
console.log(myCube);
console.log("");
console.log(myCube.volume);
console.log("");
console.log(myCube.surfaceArea);

