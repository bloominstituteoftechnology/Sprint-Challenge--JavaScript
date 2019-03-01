// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
  constructor(options) {
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
  }
  volume() {
    return this.length * this.height * this.width;
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

const babyCube = new CuboidMaker({
  length: 2,
  height: 3,
  width: 4
});

console.log("babyCube");

console.log(babyCube);
console.log(babyCube.volume());
console.log(babyCube.surfaceArea());

const lilBabyCube = new CuboidMaker({
  length: 1,
  height: 2,
  width: 3
});

console.log("lilBabyCube");

console.log(lilBabyCube.volume());
console.log(lilBabyCube.surfaceArea());

const cuboid = new CuboidMaker({
  length: 4,
  height: 5,
  width: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("cuboid");
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
