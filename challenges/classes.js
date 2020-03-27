// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboid{
    constructor(cuboid){
    this.lengthh = cuboid.lengthh;
    this.width = cuboid.width;
    this.height = cuboid.height
    }
    volume(cuboid){
     return this.lengthh * this.width * this.height;   
    }
    surfaceArea(cuboid){
    return 2 * this.lengthh * this.width + this.lengthh * this.height + this.width * this.height;   
    }
  }
const cuboid2 = new Cuboid({
    length: 4,
    width: 5,
    height: 5
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.