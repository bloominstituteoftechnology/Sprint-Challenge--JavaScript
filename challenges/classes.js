// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(cubAttr) {
//   this.length = cubAttr.length;
//   this.width = cubAttr.width;
//   this.height = cubAttr.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
// }

class CuboidMaker {
  constructor(cubAttr) {
    this.length = cubAttr.length;
    this.width = cubAttr.width;
    this.height = cubAttr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}


class CubeMaker extends CuboidMaker {
  constructor(makeAttr) {
    super(makeAttr);
    this.length = makeAttr.length;
    this.width = makeAttr.width;
    this.height = makeAttr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}


const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})

const cube = new CubeMaker({
  length: 5,
  width: 7,
  height: 6
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.volume());
console.log(cube.surfaceArea());

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/