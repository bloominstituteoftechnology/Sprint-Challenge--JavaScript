// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume(){
    return this.length * this.width * this.height;
  }

  surfaceArea(){
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

const cuboidObj = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidObj.volume()); // 100
console.log(cuboidObj.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(length){
    super(length);
  }

  volume(){
    return this.length * this.length * this.length;
  }

  surfaceArea(){
    return 6 * (this.length * this.length);
  }
}

const cubeObj = new CubeMaker(2);
console.log(cubeObj.volume());
console.log(cubeObj.surfaceArea());