// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(height, width, length) {
    this.height = height;
    this.width = width;
    this.length = length;
  }
  // Getter
  get volume() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width * this.length;
  }
  // Getter
  get surfaceArea() {
    return this.calcSurface();
  }
  // Method
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker(4, 5, 5);

console.log(cuboid.volume);
console.log(cuboid.surfaceArea);

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
