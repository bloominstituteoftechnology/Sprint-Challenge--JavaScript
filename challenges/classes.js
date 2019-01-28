// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(object) {
        this.length = object.length;
        this.width = object.width;
        this.height = object.height;
  }
  volume() {
    return this.length * this.width * this.height
  }
  sarea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
    length : 4,
    width : 5,
    height : 5
  });

console.log(cuboid.volume()); // 100
console.log(cuboid.sarea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.