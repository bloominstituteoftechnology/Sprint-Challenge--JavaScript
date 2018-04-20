// Copy and paste your prototype in here and refactor into class syntax.
//====================================
//    Base class
//====================================
class cuboid{
  constructor(parentOptions){
    this.properties = parentOptions;
  }
}

class CuboidMaker extends cuboid{
  constructor(length, width, height, parentOptions){
    super(parentOptions);
    this.length = length;
    this.width  = width;
    this.height = height;
  };
  volume() {
    return this.length * this.width * this.height;
  };
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
};

const cuboidd = new CuboidMaker(4, 5, 5, "string")
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboidd.volume()); // 100
 console.log(cuboidd.surfaceArea()); // 130
 console.log(cuboidd)

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/