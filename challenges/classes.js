// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  };
  volume() {
    return this.length * this.width * this.height;
  };
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

<<<<<<< HEAD
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
*/

class CubeMaker extends CuboidMaker {
  constructor(attributes) {
    super(attributes);
    this.side = attributes.side;
  };
  cubeVolume() {
    return Math.pow(this.side,3);
  };
  cubeSurfaceArea() {
    return 6 * Math.pow(this.side, 2);
  };
}

const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4,
  side: 4,
});

console.log(cube.cubeVolume()); // 64
console.log(cube.cubeSurfaceArea()); // 96 
=======
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
>>>>>>> d8ebbccdbd17e98156a2dd72eb778de1d6ef190e
