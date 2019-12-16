// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
  constructor(cubAttrs) {
    this.length = cubAttrs.length;
    this.width = cubAttrs.width;
    this.height = cubAttrs.height;
  }

  volume() {
    let volume = this.length * this.width * this.height;
    return volume;
  }

  surfaceArea() {
    let surfaceArea =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);
    return surfaceArea;
  }
}

class CubeMaker extends CuboidMaker2 {
  constructor(cAttrs) {
    super(cAttrs);
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

const newCubMaker = new CubeMaker({
  length: 2,
  width: 3,
  height: 4
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(newCubMaker.volume()); //24
console.log(newCubMaker.surfaceArea()); //52

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
