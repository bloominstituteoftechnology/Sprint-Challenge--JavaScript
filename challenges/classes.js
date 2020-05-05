// 1. Copy and paste your prototype in here and refactor into class syntax.
class DuboidMaker{
constructor(length, width, height){
    this.height = height;
    this.width = width;
    this.length = length;
}
 volume(){
    return this.height * this.weight * this.length;
  }
 surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
  class ruboid extends DuboidMaker{
    constructor(length, width, height){
      super()
    }
    
  }
  // const cuboid = new CuboidMaker(4,5,5);
const duboid = new ruboid(4,5,5)
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(duboid.volume()); // 100
console.log(duboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.