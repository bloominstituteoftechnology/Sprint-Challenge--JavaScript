// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
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

class CubeMaker extends CuboidMaker {
  constructor(childAttributes) {
    super(childAttributes);
    this.edge = childAttributes.edge;
  }

  cubeVolume() {
    return (this.edge **= 3);
  }

  cubeSurfaceArea() {
    return 6 * (this.edge **= 2);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4,
  edge: 4
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

console.log(cube.edge);
console.log(cube.volume());
console.log(cube.surfaceArea());
