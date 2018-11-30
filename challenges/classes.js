// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1 {
    constructor(cuboidMaker1Attributes){
      this.length = cuboidMaker1Attributes.length;
      this.width = cuboidMaker1Attributes.width;
      this.height = cuboidMaker1Attributes.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  
  
  const cuboid1 = new CuboidMaker1({
      length: 4,
      width: 5,
      height: 5
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1 {
    constructor(cubeMakerAttributes) {
        super(cubeMakerAttributes);   
    }
    cVolume() {
        return Math.pow(this.length, 3);
    }
    cSurfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
}


const cube = new CubeMaker({
    length: 2,
});


console.log(cube.cVolume()); // 8
console.log(cube.cSurfaceArea()); // 24