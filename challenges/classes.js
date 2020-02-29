// 1. Copy and paste your prototype in here and refactor into class syntax.

'use strict';
class CuboidMaker2{
    constructor(attr){
      this.length = attr.length,
        this.width = attr.width,
        this.height = attr.height
    }
    volume(){
      return `${this.length *this.width * this.height}`;
    }
    area(){
      return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
    }
  };
  
  const cuboid2 = new CuboidMaker2({
    length:8,
    width:10,
    height:10
  })


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid2.volume()); // 100
console.log(cuboid2.area()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.