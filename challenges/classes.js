// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }

  volume() {
    return (this.length * this.width * this.height);
  }

  surfaceArea() {
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  }
};

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});


class CubeMaker extends CuboidMaker {
  constructor(cubeAttr) {
    super(cubeAttr);
    this.side = cubeAttr.side;
  }

  cubeVolume() {
    return Math.pow(this.side, 3);
  }

  cubeSA() {
    return 6 * Math.pow(this.side, 2);
  }
}

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5,
  side: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());
console.log(cube.cubeVolume());
console.log(cube.cubeSA());

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/