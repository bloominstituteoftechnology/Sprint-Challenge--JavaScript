// Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
function CuboidMaker(options) {
  this.length = options.length;
  this.width = options.width;
  this.height = options.height;
}


/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height

  Formula for cuboid volume: length * width * height
*/
CuboidMaker.prototype.volume = function() {
  return (this.length * this.width * this.height);
}

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height.

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
CuboidMaker.prototype.surfaceArea = function() {
  return(2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height) ));
}


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
*/
var dimensions = {length: 4, width: 5, height: 5};
const cuboid = new CuboidMaker(dimensions);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Class Reconstruction
class CuboidMaker {
  constructor(props){
    this.length = props.length;
    this.width = props.length;
    this.height = props.height;
  }

  volume() {
    return(this.length * this.width * this.height);
  }

  surfaceArea() {
    return(2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height) ));
  }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
*/
  class CubeMaker extends CuboidMaker {
    constructor(props){
      super(props);
      this.length = this.width = this.height; //All dimensions of a cube are even.
    }

    volume() {
      return(this.length ** 3);
    }

    surfaceArea() {
      return(6 * this.length ** 2);
    }
  }
