// 1. Copy and paste your prototype in here and refactor into class syntax.

class cuboid{
constructor(length,width,heigth){
    this.length = length;
    this.width  = width;
    this.heigth = heigth;
  }
};
cuboid.prototype.volume= function(){
    return  `${this.length} * ${this.width}* ${this.height}` ;
 };
 cuboid.prototype.surfaceArea=function(width,length,height){
    return  this.length * this.width  + this.length*this.height + this.width*this.height;
   };
   cuboid.properties = Object.create(cuboid.prototype);
   const  another = new cuboid({
     length:4,
     width:5,
     height:5
   });
   

   
 
console.log(cuboid.volume);
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.