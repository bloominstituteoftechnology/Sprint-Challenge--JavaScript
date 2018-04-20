// Copy and paste your prototype in here and refactor into class syntax.

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CuboidMaker{
  constructor(attributes) {
  this.length = attributes.length;
  this.width =  attributes.width;
  this.height = attributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2* (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker{
  constructor(attributes){
    super(attributes);
  }
  volume() {
    return this.height * this.width * this.length;
  }
  surfaceArea() {
    return 6 * Math.pow(this.height, 2);
  }
}

const cuboid = new CuboidMaker ({
  length: 4, 
  width: 5,
  height: 5
});

const cuby = new CubeMaker ({
  length: 8, 
  width: 8,
  height: 8
});
console.log(cuboid)
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100p
console.log(cuboid.surfaceArea()); // 130
console.log(cuby.surfaceArea())


