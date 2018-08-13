// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(dimensions){
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
  getVolume(dimensions) {
    return this.length * this.width * this.height;
  }

  getSurfaceArea(dimensions) {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  'length': 4, 
  'width': 5,
  'height': 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.getVolume()); // 100
console.log(cuboid.getSurfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(property) {
    super(property)
  }
  volume() {
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
    return 6 * (Math.pow(this.length, 2));
  }
}

const cube1 = new CubeMaker({
  'length': 120
})

console.log(cube1.volume());
console.log(cube1.surfaceArea());