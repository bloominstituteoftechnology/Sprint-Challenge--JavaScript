// 1. Copy and paste your prototype in here and refactor into class syntax.


  class NewCuboidMaker {
      constructor(cuboid) {
        this.length = cuboid.length;
        this.width = cuboid.width;
        this.height = cuboid.height;
      }
      volume() {
        return this.length * this.width * this.height;

      }
      surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }


  const cuboidClass = new NewCuboidMaker({
    length:4,
    width: 5,
    height: 5
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboidClass.volume()); // 100
  console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends NewCuboidMaker {
    constructor(cube) {
        super(cube);
    }
    surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker({
  length: 2, 
  width: 2,
  height: 2
});

console.log(cube.volume());
console.log(cube.surfaceArea());

class PyramidMaker extends NewCuboidMaker {
  constructor(cyl) {
    super(cyl);
  }
  volume() {
    return (this.length * this.width * this.height) / 3;
  }
  surfaceArea() {
    let sa = this.length * this.width + this.length * Math.sqrt(Math.pow(this.width*.5, 2) + Math.pow(this.height, 2))  + this.width * Math.sqrt(Math.pow(this.length*.5, 2) + Math.pow(this.height, 2));
    return sa.toFixed(2);
  }
}

const pyramid = new PyramidMaker({
  length: 6,
  width: 4,
  height: 6
})

console.log(pyramid.volume());
console.log(pyramid.surfaceArea());
