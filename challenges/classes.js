// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor (props) {
    this.length = props.length;
    this.height = props.height;
    this.width = props.width;
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
  height: 5,
});

// Test your volume and surfaceArea methods by un-commenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor (props) {
    super(props);
    if (this.length !== this.width || this.width !== this.height) {
      throw("This is not a cube. Requires equal length, width, and height. Are you looking for the CuboidMaker class?");
    }
  }

  volume() {
    return 6 * Math.pow(this.length, 2);
  }

  surfaceArea() {
    return Math.pow(this.length, 3);
  }
}

const cube = new CubeMaker({
  length: 3,
  height: 3,
  width: 3,
});

console.log(cube.volume()); // 54
console.log(cube.surfaceArea()) // 27