
class CuboidMaker{
constructor(length, width, height){
    this.height = height;
    this.width = width;
    this.length = length;
  };
 volume(){
    return this.height * this.weight * this.length;
  };
 surfaceArea(){
    return 2 * (length * width + length * height + width * height);
  }
}
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.