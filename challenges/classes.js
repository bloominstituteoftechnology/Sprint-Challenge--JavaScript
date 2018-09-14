// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  //methods
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
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//operating under the assumption that we need to not only create a new subclass called CubeMaker, but also create a new object (I named it cube for obvious reasons) with which to apply CubeMaker's methods
//because it's a cube and not a cuboid, I give it equal height, width, and length
class CubeMaker extends CuboidMaker {
  constructor(cubeProps) {
    super(cubeProps);
  }
  //methods
  volume() {
    return this.length * this.height * this.width;
  }
  surfaceArea() {
    return 6 * (this.length * this.width);
  }
}

const cube = new CubeMaker({
  width: 4,
  height: 4,
  length: 4
});
console.log(cube.volume()); //correctly logs 64
console.log(cube.surfaceArea()); // correctly logs 96
