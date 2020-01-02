// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(attributes){
    this.cuboLength = attributes.length;
    this.cuboWidth = attributes.width;
    this.cuboHeight = attributes.height;
  }
   volume(){
    return this.cuboLength * this.cuboWidth * this.cuboHeight
  }
 
 
  surfaceArea(){
    return 2 * (this.cuboLength * this.cuboWidth + this.cuboLength * this.cuboHeight + this.cuboWidth * this.cuboHeight)
  }
}
  const cuboid2 = new CuboidMaker2 ({length:4, width:5, height:5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.