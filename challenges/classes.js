// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidClass {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}



const theSecondBestCuboidEverMade = new CuboidClass({
  length: 4,
  width: 5,
  height: 5
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(theSecondBestCuboidEverMade.volume()); // 100
console.log(theSecondBestCuboidEverMade.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidClass {
  constructor(childAttributes) {
    super(childAttributes);
    this.isChild = childAttributes.isChild;
  }
  // volume of a cube is the same equation for cuboid
  surfaceAreaOfCube() {
    return 6 * (this.length + this.width);
  }
}


const lookImACube = new CubeMaker({
  length: 2,
  width: 2,
  height: 2,
})


console.log(lookImACube.volume()); // accessing parent class method to calculate volume // 8
console.log(lookImACube.surfaceAreaOfCube()); // 24