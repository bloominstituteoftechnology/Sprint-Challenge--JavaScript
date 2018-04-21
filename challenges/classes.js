// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor (len, wid, hei) {
    this.len = len;
    this.wid = wid;
    this.hei = hei;
  }
  volume() {
    return this.len * this.wid * this.hei;
  }
  surfaceArea() {
    return 2 * (this.len * this.wid + this.len * this.hei + this.wid * this.hei);
  }
}

let cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:
  Extend the base class CuboidMaker with a sub class called CubeMaker.
  Find out the formulas for volume and surface area for cubes and create those methods as well.
  Create a new cube object and log out the results of your new cube.
*/
class CubeMaker extends CuboidMaker {
  constructor(measure) {
    super(measure, measure, measure);
    this.measure = measure;
  }
  cubeVolume() {
    return Math.pow(this.measure, 3);
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.measure, 2);
  }
};

let cube = new CubeMaker(5);
console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150