class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume(length, width, height) {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }

  cubeVolume(length, width, height) {
    return this.length * this.width * this.height;
  }

  cubeSurface(length, width, height) {
    return 6 * (this.length * this.length);
  }
}

const cuboid = new CuboidMaker(4, 5, 5);

const cube = new CubeMaker(5, 5, 5);

// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.cubeVolume());
console.log(cube.cubeSurface());

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
