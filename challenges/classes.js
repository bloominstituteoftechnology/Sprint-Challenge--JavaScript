// Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
  constructor(params) {
    this.length = params.length;
    this.width = params.width;
    this.height = params.height;
  }

  volume() {
    // Formula for cuboid volume: length * width * height
    return this.length * this.width * this.height;
  }
  
  surfaceArea() {
    // Formula for cuboid surface area of a cube: 
    // 2 * (length * width + length * height + width * height)
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(cubeParams) {
    super(cubeParams);
  }

  volume() {
    // Formula for cube volume: length ^ 3
    if (this.length != this.width || this.length != this.height) {
      return "You have not created a cube!"
    } else {
      return Math.pow(this.length, 3);
    }
    
  }
  
  surfaceArea() {
    // Formula for cube surface area: 
    // 6 * (width * height)
    if (this.length != this.width || this.length != this.height) {
      return "You have not created a cube!"
    } else {
      return 6 * (this.width * this.height);
    }
  }
}

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5,
})

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150

const notACube = new CubeMaker({
  length: 5,
  width: 4,
  height: 5,
})

console.log(notACube.volume()); // You have not created a cube!
console.log(notACube.surfaceArea()); // You have not created a cube!