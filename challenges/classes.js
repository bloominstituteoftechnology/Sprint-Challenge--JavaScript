// Copy and paste your prototype in here and refactor into class syntax.

//class

class CuboidMaker {
  constructor(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height;
  }

  //methods

  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

//new object

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

//sub class

class CubeMaker extends CuboidMaker {
  constructor(attr) {
    super(attr);
  }

  //methods

  cubeVolume() {
    return this.length * this.width * this.height;
  }
  cubeSurface() {
    return 6 * (this.length * this.width);
  }
}

//cube object

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});


console.log(cube.volume()); 
console.log(cube.surfaceArea()); 