// Copy and paste your prototype in here and refactor into class syntax.
// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.area = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }
class volume {
  constructor (length, width, height) {
      volume.length = length;
      volume.width = width;
      volume.height = height;
  }
}

class area {
  constructor (length, width, height) {
    area.length = length;
    area.width = width;
    area.height = height;
}
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/