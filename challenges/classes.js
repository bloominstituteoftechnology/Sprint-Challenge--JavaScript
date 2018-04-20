// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(options) {
    this.length = options.length;
    this.height = options.height;
    this.width = options.width;
  }

 volume() {
  return this.length * this.width * this.height;
 }

 surfaceArea() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
 }

}

let cuboidAttr = {
  length: 4,
  width: 5,
  height: 5
};
const cuboid = new CuboidMaker(cuboidAttr);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(size) {
    super(size);
    this.size = size;
  }

  cubeVolume() {
    return this.size * this.size * this.size;
  }

  cubeSurfaceArea() {
   return 2 * (this.size * this.size + this.size * this.size + this.size * this.size);
  }
}

const cube = new CubeMaker(3);
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
