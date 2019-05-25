// 1. Copy and paste your prototype in here and refactor into class syntax.//
//CuboidMaker.prototype.volume=function (){
  //  return `The volume of the Cuboid is ${this.length} * ${this.width} * ${this.height}. `;
  //};

  class Cuboid{
      constructor(length,height,width){
          this.length=length;
          this.width=width;
          this.height=height;
      }
  }

  const volumeCuboid= new Cuboid(4*5*5);

 // CuboidMaker.prototype.surfaceArea= function () {
   //return `The surface area of the cuboid is 2*(${this.length}* ${this.width}+ ${this.length} * ${this.height} +${this.width}*${this.height}). `;
 // };

 const surfaceArea= new Cuboid (2*(4*5+4*5+5*5));   


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.