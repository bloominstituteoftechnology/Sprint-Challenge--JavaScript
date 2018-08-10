// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props){
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
}


// Prototype to calcualte the cuboid's volume
CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
}


// Prototype to calcualte the cuboid's surface area
CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}


// New cuboid object
const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});


// Cubiod volume and surfaceArea methods
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(props) {
  super(props)
  }
  cubeVolume() {
    return Math.pow(this.length, 3);
  }
  cubeSurfaceArea() {
    return Math.pow(this.length, 2) * 6;
  }
}


// New cube object
const cube = new CubeMaker({length: 5})


// Cube volume and surfaceArea methods
console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150