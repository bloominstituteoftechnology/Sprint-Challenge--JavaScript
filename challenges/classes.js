// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(options) {
    this.length = options.length,
    this.width = options.width,
    this.height = options.height
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker{
  constructor(cubeOptions) {
  super(cubeOptions);
  this.side = cubeOptions.side;
  };
  cubeVolume() {
    return this.side * this.side * this.side;
  };
  cubeSurfaceArea() {
    return 6 * (this.side * this.side);
  };
};

const cuboid = new CuboidMaker ({
  "length": 4,
  "width": 5,
  "height": 5
});

const cube = new CubeMaker ({
  "side": 3,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea());// 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());

