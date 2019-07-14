// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension
// properties from CuboidMaker.  Test your work by logging out your volume and surface area.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. 
// Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

class CuboidMaker {
    constructor(cuboid) {
        this.length = cuboid.length,
        this.width = cuboid.width,
        this.height = cuboid.height
    }

    volume(length, width, height) {
        return this.length * this.width * this.height;
    }

    surfaceArea(length, width, height) {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130