// Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(cuboidAttrs) {
//   this.length = cuboidAttrs.length;
//   this.width = cuboidAttrs.width;
//   this.height = cuboidAttrs.height;
// }

// CuboidMaker.prototype.volume = function() {
//   let volume;
//   return volume = this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   let surfaceArea;
//   return surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

// const cuboid = new CuboidMaker({
//   length : 4,
//   width : 5,
//   height : 5,
// });
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
class CuboidMaker {
  constructor(cuboidAttrs) {
    this.length = cuboidAttrs.length;
    this.width = cuboidAttrs.width;
    this.height = cuboidAttrs.height;
  }
  volume() {
    let volume;
    return volume = this.length * this.width * this.height;
  }
  surfaceArea() {
    let surfaceArea;
    return surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length : 4,
  width : 5,
  height : 5,
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor (cubeAttrs) {
    super(cubeAttrs);
  }
  cubeSurfaceArea() {
    let cubeSurafaceArea;
    return cubeSurafaceArea = (6 * (this.length * this.length));
  }
}

const cube = new CubeMaker({
  length: 2,
  width: 2,
  height: 2,
});

console.log(cube.volume());
console.log(cube.cubeSurfaceArea());