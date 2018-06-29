// Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
  constructor(parentProps) {
    this.length = parentProps.length;
    this.width = parentProps.width;
    this.height = parentProps.height;
  }

  volume () {
    return `Cuboid's volume is ${this.length * this.width * this.height}`;
  }

  surfaceArea () {
    let length = this.length;
    let width = this.width;
    let height = this.height;
    let surface = length * width + length * height + width * height;
    return `Cuboid's surface area is ${surface * 2}`
  }
}

const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(childProps) {
    super(childProps)
    this.area = childProps.area;
  }

  volume () {
    return `Cube's volume is ${Math.pow(this.length, 3)}`;
  }

  surfaceArea () {
    let areaOfCube = this.area * this.area;
    return `Cube's suface area is ${areaOfCube * 6}`;
  }
}

const cube = new CubeMaker ({
  length: 5,
  area: 5
})



console.log(cube.volume());
console.log(cube.surfaceArea());