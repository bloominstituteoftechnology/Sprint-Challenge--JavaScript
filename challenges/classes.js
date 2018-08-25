// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CuboidMaker {

  constructor(cuboidObj) {
    this.length = cuboidObj.length;
    this.width = cuboidObj.width;
    this.height = cuboidObj.height;
  } //cuboidObj
} //CuboidMaker

cuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
}

cuboidMaker.prototype.surfaceArea = function(){
  return 2*(this.length * this.width + this.width * this.height + this.width * this.height);
}

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


class CubeMaker extends CubeMaker {

  constructor(cubeObj) {
    this.length = cubeObj.length;
    this.width = cubeObj.width;
    this.height = cubeObj.height;
  } //cubeObj
} // end CubeMaker