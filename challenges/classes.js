// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(attributes){
    this.length = attributes.length,
    this.width = attributes.length,
    this.height = attributes.height
  }
  cuboidVolume(){
      return this.length * this.width * this.height;
  }
  cuboidSurface(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
const cuboid = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.cuboidVolume()); // 100
console.log(cuboid.cuboidSurface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.