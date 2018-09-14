// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea(shape) { // string "cuboid" or "cube"
    if (shape.toLowerCase() === 'cuboid') {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    } else if (shape.toLowerCase() === 'cube') {
      return 6 * (this.length * this.length);
    } else {
      return 'Invalid shape. Cuboid or Cube only.'
    }

  }
}

const cuboid = new CuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea('cuboid')); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// CuboidMaker > CubeMaker
class CubeMaker extends CuboidMaker {
  constructor(props) {
    super(props);
  }

  // volume formula of cube and cuboid are the same
  // cube only has equal sides

  // modified surfaceArea() of CuboidMaker to also get cube's surface area
}

const cube = new CubeMaker({
  'length': 5,
  'width': 5,
  'height': 5
});

console.log(cube.volume()); // 125
console.log(cube.surfaceArea('Cube')); // 150
console.log(cube.surfaceArea('rectangle')); // "Invalid shape. Cuboid or Cube only."
