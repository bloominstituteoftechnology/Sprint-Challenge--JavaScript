// Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker{
  constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }

}

const newCuboid = new CuboidMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker{
  constructor(dimensions){
    super(dimensions, dimensions, dimensions);
    this.dimensions = dimensions;
  }

  volume(){
    return Math.pow(this.dimensions, 3);
  }

  surfaceArea(){
    return Math.pow(this.dimensions, 2) * 18;
  }
}

const newCube = new CubeMaker(10);

console.log(newCube.volume()); // returns 1000
console.log(newCube.surfaceArea()); // returns 1800