// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
  constructor(props) {
  this.length = props.length;
  this.width = props.width;
  this.height = props.height;
  }
  volume() {
    return (this.length * this.width * this.height);
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
  
}
class CubeMaker extends CuboidMaker{
  constructor(property){
    super(property);
  } 
  surface() {
    return 6 * (this.length * this.length);
  }
  boxVol() {
    return (this.length)^3;
  }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});
const cube = new CubeMaker({length: 8, width: 8, height: 8})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surface());
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/