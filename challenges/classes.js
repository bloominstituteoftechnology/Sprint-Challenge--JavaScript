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