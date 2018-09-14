// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor (cuboidAttributes) {
  this.length = cuboidAttributes.length;
  this.width = cuboidAttributes.width;
  this.height = cuboidAttributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

class CubeMaker extends CuboidMaker {
  constructor (cubeAttributes) {
    super(cubeAttributes)
  this.length = cubeAttributes.length;
  this.width = cubeAttributes.width;
  this.height = cubeAttributes.height;
  }
  cubeVolume() {
    return this.height**3
  }

  cubeSurfaceArea() {
    return 6 * this.height**2
  }
}

const cuboid = new CuboidMaker({
  'length' : 4,
  'width' : 5,
  'height' : 5,
})

const cube = new CubeMaker({
  'length' : 4,
  'width' : 4,
  'height' : 4,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube. cubeVolume()); // 64
console.log(cube.cubeSurfaceArea()); // 96

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.
  Find out the formulas for volume and surface area for cubes and create those methods as well.
  Create a new cube object and log out the results of your new cube.

*/
//123