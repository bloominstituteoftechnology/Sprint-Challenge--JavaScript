// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume() {
  if ( this.length === 0 || this.width === 0 || this. height === 0 ) {
      return 'Sorry, all sides must be non-zero values.'
    } else return (this.length * this.width * this.height);
  }
  surfaceArea() {
    if (this.length === 0 || this.width === 0 || this.height === 0) {
      return 'Sorry, all sides must be non-zero values.'
    } else return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
  }
}



const testCuboid = new CuboidMaker({
  length: 6,
  width: 5,
  height: 6
});

class CubeMaker extends CuboidMaker {
  constructor(props) {
  super(props);
  }
  volume() {
    if (this.length != this.width || this.length != this.height || this.width != this.height){
    return 'This is not a cube, please try the CuboidMaker next time';
    }else if ( this.length === 0 || this.width === 0 || this. height === 0 ) {
      return 'Sorry, all sides must be non-zero values.'
    } else return (this.length **=3);
  }
  surfaceArea() {
     if (this.length != this.width || this.length != this.height || this.width != this.height) {
       return 'This is not a cube, please try the CuboidMaker next time';
     } else if (this.length === 0 || this.width === 0 || this.height === 0) {
       return 'Sorry, all sides must be non-zero values.'
     } else return (6 * (this.length **= 2));
  }

}

const testCube = new CubeMaker({
  'length': 5,
  'width': 5,
  'height': 5,
});
const anotherCube = new CubeMaker({
  'length': 5,
  'width': 5,
  'height': 5,
});

console.log(testCuboid.volume());
console.log(testCuboid.surfaceArea());
console.log(testCube.volume());
console.log(anotherCube.surfaceArea());