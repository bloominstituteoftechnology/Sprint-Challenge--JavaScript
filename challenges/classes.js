// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(dimensions) {
  this.length = dimensions.length;
  this.width = dimensions.width;
  this.height = dimensions.height;
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
volume() {
  return this.length * this.width * this.height;
}

surfaceArea() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

}//CuboidMaker Class End

class CubeMaker extends CuboidMaker {
  constructor(cubeDimensions) {
    super(cubeDimensions)
  this.edge = cubeDimensions.edge;

}
cubeVolume() {
  //return this.edge * this.edge * this.edge;
  return Math.pow(this.edge,3);
}

cubeSurfaceArea() {
  return 6 * (Math.pow(this.edge,2));
}

}//CubeMaker Class End
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5,
    edge: 6,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
console.log(cube.length);
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());