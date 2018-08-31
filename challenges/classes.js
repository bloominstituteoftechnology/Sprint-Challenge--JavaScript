// Copy and paste your prototype in here and refactor into class syntax.

//I wrote the original file in ES6 syntax so both files will look the same
class CuboidMaker{
  constructor(cuboid) {
  this.length = cuboid.length;
  this.width = cuboid.width;
  this.height = cuboid.height;
  };
  volume() {
    return this.length * this.width * this.height;
  };
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(cube){
    super(cube)
  }
  volume() {
    return Math.pow(this.length, 3);
  };
  surfaceArea() {
    return 2 * (Math.pow(this.length, 2) * 3);
  };
}

const cube = new CubeMaker({
  length: 7,
  width: 7,
  height: 7,
});

console.log(cube.volume()); // 
console.log(cube.surfaceArea()); // 
  