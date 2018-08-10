// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(properties) {
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
  }
  volume() {
    return this.length * this.width * this.height;
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
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(cubeProps) {
    super(cubeProps);
    this.side = cubeProps.side;
    this.height = cubeProps.side;
    this.width = cubeProps.side;
    this.length = cubeProps.side;
  }
  // cubeVolume and cubeSurfaceArea gives same result as Volume and surfaceArea prototypes for CuboidMaker
  cubeVolume() {
    return Math.pow(this.side, 3);
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.side, 2);
  }
}

const cube = new CubeMaker({
  side: 3,
});

console.log(cube);
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());

class PyramidMaker extends CuboidMaker {
  constructor(pyraProps) {
    super(pyraProps);
  }
  pyramidVolume() {
    return (this.height * this.length * this.width) / 3;
  }
  pyramidSurfaceArea() {
    return (
      this.length * this.width +
      this.length *
        Math.sqrt(Math.pow(this.width / 2, 2) + Math.pow(this.height, 2)) +
      this.width *
        Math.sqrt(Math.pow(this.length / 2, 2) + Math.pow(this.height, 2))
    );
  }
}

const pyramid = new PyramidMaker({
  length: 4,
  width: 5,
  height: 5,
});
console.log(pyramid);
console.log(pyramid.pyramidVolume());
console.log(pyramid.pyramidSurfaceArea());
