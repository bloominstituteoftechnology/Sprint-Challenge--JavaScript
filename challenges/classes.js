// Copy and paste your prototype in here and refactor into class syntax.

let EQ;

class CuboidMaker {
  constructor (cuboid) {
  this.length = cuboid.length;
  this.width = cuboid.width;
  this.height = cuboid.height;
  };

  volume() {
    return this.length * this.width * this.height;
  };

  surfaceA() {
    first = this.length * this.width + this.length * this.height + this.width * this.height;
    return 2*first;
  };
};


const cuboid = new CuboidMaker({
  length: 4,
  width: 5, 
  height: 5
  });



// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceA()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/