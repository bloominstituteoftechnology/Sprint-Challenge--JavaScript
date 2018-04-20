// Copy and paste your prototype in here and refactor into class syntax.
/*
  function CuboidMaker (length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  CuboidMaker.prototype.volume = function() {
    return this.height * this.length * this.width;
  }
  CuboidMaker.prototype.surfaceArea =  function() {
    return (this.length * this.width + this.length * this.height + this.width * this.height) * 2;
  }

  CuboidMaker.prototype.surfaceArea =  function() {
    return (this.length * this.width + this.length * this.height + this.width * this.height) * 2;
  }
*/
/** REFACTORING */
class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.height * this.length * this.width;
  }
  surfaceArea() {
    return (this.length * this.width + this.length * this.height + this.width * this.height) * 2;
  }
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
const cuboid = new CuboidMaker(4, 5, 5);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:
Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
*/
// A cube is a geometric 3-D object which has 12 edges of the same lenght and perpendicular between them.
class CubeMaker extends CuboidMaker{
  constructor (param) {
    super(param, param, param);
  }
  volume() {
    return Math.pow(this.length || this.height || this.width, 3);
  }
  surfaceArea() {
    return Math.pow(this.length || this.height || this.width, 2) * 6;
  }
}

const cube = new CubeMaker(10);
console.log(cube.volume()); // 1000
console.log(cube.surfaceArea()); // 600
