class CuboidMaker {
  constructor(length, width = length, height = length) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    const { length, width, height } = this;
    return 2 * (length * width + length * height + width * height);
  }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
// I decided to not repeat myself by making new methods when the existing ones suffice.
class CubeMaker extends CuboidMaker {
  constructor(length) {
    super(length)
  }
}

const cube = new CubeMaker(2);

console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24
