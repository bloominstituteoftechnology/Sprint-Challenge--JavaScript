// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cuboidProps) {
    this.length = cuboidProps.length;
    this.width = cuboidProps.width;
    this.height = cuboidProps.height;
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

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker. Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(cubeMakerProps) {
    super(cubeMakerProps);
    this.edge = cubeMakerProps.edge;
  }
  volume() {
    return this.edge**3;
  }
  surfaceArea() {
    return 6 * (this.edge**2);
  }
}

const cube = new CubeMaker({
  edge: 5,
  length: 5,
  width: 5,
  height: 5
});

console.log(cube.edge); // 5
console.log(cube.length); // 5
console.log(cube.width); // 5
console.log(cube.height); // 5
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150
