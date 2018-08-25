// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
class CuboidMaker {
  constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
  }

  volume() {
      return this.length * this.width * this.height;
  }

  surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const newCuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

/* Stretch Task:
Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
*/

class Cubemaker extends CuboidMaker {
  constructor(measurement) {
      super(measurement, measurement, measurement);
      this.measurement = measurement;
  }

  volume() {
      return Math.pow(this.measurement, 3);
  }

  surfaceArea() {
      return Math.pow(this.measurement, 2) * 6;
  }
}

const newCube = new Cubemaker(10);

console.log(newCube.volume());
console.log(newCube.surfaceArea());

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/