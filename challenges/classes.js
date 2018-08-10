// Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(properties) {
//   this.length = properties.length;
//   this.width = properties.width;
//   this.height = properties.height;
// }
// CuboidMaker.prototype.volume = function() {
//   return `${this.length}` * `${this.width}` * `${this.height}`;
// }
// */CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this.height}`);
// }
// const cuboid = new CuboidMaker({
//   length: 4,
//   width: 5,
//   height: 5,
// });

class CuboidMaker {
  constructor(cmAttr) {
    this.length = cmAttr.length
    this.width = cmAttr.width;
    this.height = cmAttr.height;
  }
  volume() {
    return `${this.length}` * `${this.width}` * `${this.height}`;
  }
  surfaceArea() {
    return 2 * (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this.height}`);
  }
}
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(cubeAttr) {
    super(cubeAttr);
  }
  cubeVolume() {
    return Math.pow(this.length, 3);
  }
  cubeSArea() {
    return 6 * Math.pow(this.length, 2);
  }
}

const cube = new CubeMaker ({
  length: 3,
});

console.log(cube.cubeVolume());
console.log(cube.cubeSArea());