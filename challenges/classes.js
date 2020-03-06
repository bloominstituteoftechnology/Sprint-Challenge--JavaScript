// 1. Copy and paste your prototype in here and refactor into class syntax.


// Refactored code

class CuboidMaker {
  constructor(newCuboid) {
    this.length = newCuboid.length,
      this.width = newCuboid.width,
      this.height = newCuboid.height
  }

  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
    */

  // Old code

  //     CuboidMaker.prototype.volume = function () {
  //     return this.length * this.width * this.height;
  //   };

  // Refactored code

  volume() {
    return this.length * this.width * this.height;
  }

  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

  // Old code

  //   CuboidMaker.prototype.surfaceArea = function () {
  //     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  //   };

  // Refactored code

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }

}

class CubeMaker extends CuboidMaker {
  constructor(newCube) {
    super(newCube);
  }

volume() {
  return this.length * this.width * this.height;
}

surfaceArea() {
  return (this.length * this.length) * 6
}
}


// // Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});

console.log(cuboid)
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


console.log(cube)
console.log(cube.volume());
console.log(cube.surfaceArea());
