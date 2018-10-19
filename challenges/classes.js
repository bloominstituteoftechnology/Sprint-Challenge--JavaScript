// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.
class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
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

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
console.log(cuboid.volume());
console.log(cuboid.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attributes) {
    super(attributes);
    this.sides = attributes.sides;
  }
  volume() {
    return this.sides * this.sides * this.sides;
  }
  surfaceArea() {
    return 2 * (this.sides * this.side * 3);
  }
}

const crazyCube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4,
  sides: 4
});
console.log(crazyCube.volume());
console.log(crazyCube.surfaceArea());
