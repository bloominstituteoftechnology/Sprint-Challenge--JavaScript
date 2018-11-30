// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(CuboidProps) {
    this.length = CuboidProps.length;
    this.width = CuboidProps.width;
    this.height = CuboidProps.height;
    }
    volume() {
        return this.length * this.width * this.height
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
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

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class Cube extends CuboidMaker {
    constructor(CubeProps) {
        super(CubeProps);
    }
    volume() {
        return this.width**3
    }
    surfaceArea() {
        return 6*this.width**2
    }
}

const cube = new Cube ({
    width: 5
})
console.log(cube.volume());
console.log(cube.surfaceArea());