// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(x) {
    this.length = x.length;
    this.width = x.width;
    this.height = x.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return this.length * this.width * 2 + this.length * this.height * 2 + this.width * this.height * 2;
  }
}

let cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height:5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/