// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(cuboidAttr) {
//   this.length = cuboidAttr.length;
//   this.width = cuboidAttr.width;
//   this.height = cuboidAttr.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

class CuboidMaker {
  constructor(cuboidAttr) {
    this.length = cuboidAttr.length;
    this.width = cuboidAttr.width;
    this.height = cuboidAttr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker {
  constructor(cubeAttr) {
    super(cubeAttr);
  }
  isCube() {
    if( (this.length === this.width) && (this.length === this.height) ) {
      return true;
    } else {
      return false;
    }
  }
  cubeVolume() {
    if(this.isCube()) {
      return this.length**3;
    } else {
      return 'Not a cube';
    }
  }
  cubeSurfaceArea() {
    if(this.isCube()) {
      return 6 * this.length**2;
    } else {
      return 'Not a cube';
    }
  }
}

// ----------Objects---------- //
const cuboid = new CuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5
});

const cube = new CubeMaker({
  'length': 3,
  'width': 3,
  'height': 3
});

const notACube = new CubeMaker({
  'length': 3,
  'width': 4,
  'height': 3
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());

console.log(notACube.cubeVolume());
console.log(notACube.cubeSurfaceArea());
