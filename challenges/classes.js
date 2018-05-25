// Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume () {
    return this.length * this.width * this.height
  }
  surfaceArea () {
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height))
  }
}

class CubeMaker extends CuboidMaker {
  constructor(cubeAttributes) {
    super(cubeAttributes);
  }
  cubevolume () {
    return this.length * this.width * this.height
  }
  cubesurface () {
    return (6 * (this.length * this.height))
  }
}

const cuboid = new CuboidMaker({
  "length": 4,
  "width": 5,
  "height": 5
});

const cube = new CubeMaker({
  "length": 5,
  "width": 5,
  "height": 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

console.log(cube.cubevolume()); // 125
console.log(cube.cubesurface()); // 150