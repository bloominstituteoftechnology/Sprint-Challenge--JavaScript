// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume (l, w, h) {
    l = this.length;
    w = this.width;
    h = this.height;
    return l*w*h;
  }

  surfaceArea (l, w, h) {
    l = this.length;
    w = this.width;
    h = this.height;
    return 2*(l*w+l*h+w*h);
  }
}


const myCuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(myCuboid.volume()); // 100
console.log(myCuboid.surfaceArea()); // 130>

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(l) {
    super(l);
    this.length = l;
  }
  volume (l) {
    l = this.length;
    return l*l*l;
  }

  surfaceArea (l) {
    l = this.length;
    return 6*(l*l*l);
  }
}

const myCube = new CubeMaker(7);

console.log(myCube.volume());
console.log(myCube.surfaceArea());
