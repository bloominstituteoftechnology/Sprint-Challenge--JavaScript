// Copy and paste your prototype in here and refactor into class syntax.

// BASE CLASS

class CuboidMaker {
  constructor (cuboidMakerAttributes) {
  this.length = cuboidMakerAttributes.length;
  this.width = cuboidMakerAttributes.width;
  this.height = cuboidMakerAttributes.height;  
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

// SUB CLASS

class CubeMaker extends CuboidMaker {
  constructor(cubeMakerAttributes) {
    super(cubeMakerAttributes);    
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 6 * (this.length * this.length);
  }
}

// OBJECT

const cuboid = new CuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5,
})

const cube = new CubeMaker({
  'length': 3,
  'width': 3,
  'height': 3,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:

// For Cuboid

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// For Cube

console.log(cube.volume()); // 27
console.log(cube.surfaceArea()); // 54

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/