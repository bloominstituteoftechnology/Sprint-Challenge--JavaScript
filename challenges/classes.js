// 1. Copy and paste your prototype in here and refactor into class syntax.

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

// == Step 1: Base Constructor ==

class CuboidMakerClass {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  // == Step 2: Volume Method ==
  volume() {
    return `Volume of a cuboid: ${this.length * this.width * this.height}`;
  }
  // == Step 3: Surface Area Method ==
  surfaceArea() {
    return `Surface area of a cuboid: ${2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)}`;
  }
}

// == Step 4: Create a new object that uses CuboidMaker ==
const cuboidClass = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// ===========Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
