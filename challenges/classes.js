// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume(length, width, height) {
    return this.length * this.width * this.height;
  }

  surfaceArea(length, width, height) {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CuboidMaker {
  constructor(obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }

  volume(obj) {
    return this.length * this.width * this.height;
  }

  surfaceArea(obj) {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboidSmall = {
  length: 5,
  width: 5,
  height: 4,
  s: 2,
}

const cubeMedium = {
  length: 10,
  width: 10,
  height: 10,
  s: 10,
}

const cuboid = new CuboidMaker(cuboidSmall);

class CubeMaker extends CuboidMaker {
  constructor(obj) {
    super(obj);
    this.s = obj.s;
  }

  cubeVolume(s) {
    return Math.pow(s, 3);
  }

  cubeSurfaceArea(s) {
    return 6 * Math.pow(s, 2);
  }
}

const cube10 = new CubeMaker(cubeMedium);