// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(side) {
    super({
      length: side,
      width: side,
      height: side
    })
    this.side = side;
  }
}

// Since a cube is basically a cuboid that has the same measurement on its length, width, and height, then we can use cuboid's .volume and .surfaceArea methods directly to calculate the volume and the surfaceArea of a cube. So, there's no need to create or to override the .volume and .surfaceArea methods from the CuboidMaker parent object.

const cube = new CubeMaker(5);
console.log(`A cube that has a ${cube.side} unit long side has a ${cube.volume()} cubic unit volume.`);
console.log(`A cube that has a ${cube.side} unit long side has a ${cube.surfaceArea()} square unit surface area.`);

// Another way to implement CubeMaker.
// On this implementation, CubeMaker instances' length, width, and height will be undefined. Therefore, we need to re-implement its .volume and .surfaceArea methods.  

class CubeMaker2 extends CuboidMaker {
  constructor(attr) {
    super(attr);
    this.side = attr.side;
  }
  volume() {
    return Math.pow(this.side, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.side, 2);
  }
}

const anotherCube = new CubeMaker2(5);
console.log(`Another cube that has a ${cube.side} unit long side has a ${cube.volume()} cubic unit volume.`);
console.log(`Another cube that has a ${cube.side} unit long side has a ${cube.surfaceArea()} square unit surface area.`);