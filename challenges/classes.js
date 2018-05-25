// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(atts) {
    this.length = atts.length;
    this.width = atts.width;
    this.height = atts.height;
  }

  volume () {
    return this.length * this.width * this.height;
  }

  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

let cuboid = new CuboidMaker ({
  "length": 4,
  "width": 5,
  "height": 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(atts) {
    super(atts);
  }

  cubeSurfaceArea () {
    return 6 * (this.length * this.width);
  }
}

let cube = new CubeMaker ({
  "length": 3,
  "width": 3,
  "height": 3,
})

console.log(cube.volume());
console.log(cube.cubeSurfaceArea());