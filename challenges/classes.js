// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume() {
    return (this.length * this.width * this.height);
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

class CubeMaker extends CuboidMaker {
  constructor(props) {
    super(props);
  }
  cubeVolume() {
    if (this.length === this.width && this.length === this.height) {
      return Math.pow(this.length, 3)
    }
    else {
      return "This is not a cube!"
    }
  }
  cubeSurfaceArea() {
    if (this.length == this.width && this.length == this.height) {
      return Math.pow(this.length, 2) * 6
    }
    else {
      return "This is not a cube!"
    }
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker({
  length: 10,
  width: 10,
  height: 10
});

const nonCube = new CubeMaker({
  length: 10,
  width: 9,
  height: 8
});


console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
console.log(nonCube.cubeVolume());
console.log(nonCube.cubeSurfaceArea());

