// Copy and paste your prototype in here and refactor into class syntax.

// /* == Step 1: Base Constructor ==
//   Create a constructor function named CuboidMaker that accepts properties for length, width, and height
// */
// function CuboidMaker (prop){
//   this.length = prop.length;
//   this.width = prop.width;
//   this.height = prop.height
// }


// /* == Step 2: Volume Method ==
//   Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
//   Formula for cuboid volume: length * width * height
// */
// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// /* == Step 3: Surface Area Method ==
//   Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

//   Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
// */
// CuboidMaker.prototype.surfaceArea = function() {
//   return 2* (this.length * this.width + this.length * this.height + this.width * this.height);
// }


class CuboidMaker {
  constructor(prop) {
  this.length = prop.length;
  this.width = prop.width;
  this.height = prop.height
  }
  volume() {
    return this.length * this.width * this.height; 
  }
  surfaceArea() {
    return 2* (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cuboid = new CuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(cubProp) {
    super(cubProp);
  }
  cubeSurfaceArea() {
    return 6 * (this.width * this.width);
  }
}

const cube = new CubeMaker({
  'length': 3,
  'width': 3,
  'height': 3
});

console.log(cube.volume()); 
console.log(cube.cubeSurfaceArea());
