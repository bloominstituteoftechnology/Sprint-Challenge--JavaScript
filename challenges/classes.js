// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CuboidMaker {
  constructor(cubAttr) {
    this.length = cubAttr.length;
    this.width = cubAttr.width;
    this.height = cubAttr.height;
  }
  volume() {
    return `${this.length * this.width * this.height}`;
  }
  surfaceArea() {
    return `${2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)}`;
  }
}
const cuboid = new CuboidMaker({
  length: 4,
  height: 5,
  width: 5
});
class CubeMaker extends CuboidMaker {
  constructor(cubeMakerAttr) {
    super(cubeMakerAttr);
    this.sides = cubeMakerAttr.sides;
  }
  cubeSurface() {
    return `${6 * Math.pow(this.sides, 2)}`;
  }
}
const cube = new CubeMaker({
  length: 3,
  height: 5,
  width: 5,
  sides: 4
});
console.log(cube.volume()); // 100
console.log(cube.cubeSurface());
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
