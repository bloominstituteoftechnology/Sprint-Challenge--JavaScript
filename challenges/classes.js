// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  // Method goes here:
  volume() {
    return (this.length * this.width * this.height);
  } // End of volume method
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  } // End of surface method
}

class CubeMaker extends CuboidMaker {
  constructor(cubeAttr) {
    super(cubeAttr);
    this.length = cubeAttr.length;
    this.width = cubeAttr.width;
    this.height = cubeAttr.height;
  }
  // Method goes here:
  volume() {
    return (this.length * this.height * this.width);
  } // End of voume method
  surface() {
    return (Math.pow(this.length, 2) * 6);
  }
}

const cuboid = new CuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5
});

const cube = new CubeMaker({
  'length': 4,
  'width': 4,
  'height': 4
}) //cube will always have the same size sides

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surface());
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area..