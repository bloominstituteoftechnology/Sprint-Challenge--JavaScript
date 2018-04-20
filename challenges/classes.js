// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


// Original Prototype

// const CuboidMaker = function (options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
// }
// CuboidMaker.prototype.volume = function () {
//   return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function () {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }


class CuboidMaker {
  constructor(cuboidMakerOptions) {
    this.length = cuboidMakerOptions.length;
    this.width = cuboidMakerOptions.width;
    this.height = cuboidMakerOptions.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker {
  constructor(cubeMakerOptions) {
    super(cubeMakerOptions);
    this.length = cuboidMakerOptions.length;
    this.width = cuboidMakerOptions.width;
    this.height = cuboidMakerOptions.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeExtender extends CubeMaker {
  constructor(cubExtenderOptions) {
    super(cubExtenderOptions);
    this.length = cuboidMakerOptions.length;
    this.width = cuboidMakerOptions.width;
    this.height = cuboidMakerOptions.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cuboid = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});

const cuboid = new CubeExtender({
  length: 4,
  width: 5,
  height: 5
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/