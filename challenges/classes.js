// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

CuboidMaker.prototype.volume = function () {
  return length * width * height;
};


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
CuboidMaker.prototype.surfaceArea = function () {
  return length * width + length * height + width * height;
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker(length = 4, width = 5, height = 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker. 
   Find out the formulas for volume and surface area for cubes and create those methods as well. 
    Create a new cube object and log out the results of your new cube.

*/

class cubeMaker extends CuboidMaker {
  constructor(length) {
    super(length);
    this.surfaceArea = function () { return 6 * Math.pow(length, 2);  }
    this.volume = function () { return Math.pow(length, 3); }
  }
}
const cube = new cubeMaker(length = 6);

console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130