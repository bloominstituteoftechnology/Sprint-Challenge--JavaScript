// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(cuboidAttributes) {
//   this.length = cuboidAttributes.length;
//   this.width = cuboidAttributes.width;
//   this.height = cuboidAttributes.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length*this.width*this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }


class CuboidMaker {
  constructor(cuboidAttributes) {
    this.length = cuboidAttributes.length;
    this.width = cuboidAttributes.width;
    this.height = cuboidAttributes.height;
  }
  volume() {
    return this.length*this.width*this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cuboid1 = new CuboidMaker({
  length:4,
  width:5,
  height:5,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(CubeMaker) {
    super(CubeMaker);

  }
  volume() {
    return this.length*this.width*this.height;
  }
  surfaceArea() {
    return this.length*this.length*6;
  }
}


const cube1 = new CubeMaker({
  length:5,
  width:5,
  height:5,
})

console.log(cube1.volume());
console.log(cube1.surfaceArea());
