// Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(stats) {
//   this.length = stats.length;
//   this.width = stats.width;
//   this.height = stats.height;
// }
// CuboidMaker.prototype.volume = function () {
//   return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function () {
//   return 2 * ( this.length * this.width + this.length * this.height + this.width * this.height );
// }

class CuboidMaker {
  constructor(stats) {
    this.length = stats.length;
    this.width = stats.width;
    this.height = stats.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * ( this.length * this.width + this.length * this.height + this.width * this.height );
  }

}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(stats) {
    super(stats);
  }
  
  // All sides are the same in a `cube`
  volume() {
    //return this.length * this.length * this.length;
    return Math.pow(this.length, 3);
  }

  surfaceArea() {
    return (this.length * this.width) * 6;
  }
}

const cube = new CubeMaker({length:3, width:3, height:3})
console.log(cube.volume());
console.log(cube.surfaceArea());