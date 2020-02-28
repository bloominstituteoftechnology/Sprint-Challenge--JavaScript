// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// function CuboidMaker(length,width,height){
//     this.long = long;
//     this.width = width;
//     this.height = height;
//   }
  
//   CuboidMaker.prototype.volume = function(){
//     return this.long*this.width*this.height;
//   };
  
//   CuboidMaker.prototype.surfaceArea = function(){
//     return(
//       2*
//       (this.long*this.width +
//         this.long*this.height +
//         this.width*this.height)  
//       );
//   };
  
//   const cuboid = new CuboidMaker(4,5,5);
//   // Test your volume and surfaceArea methods by uncommenting the logs below:
//   console.log(cuboid.volume()); // 100
//   console.log(cuboid.surfaceArea()); // 130
  class CuboidMake{
      constructor(long,width,height){
          this.long=long;
          this.width=width;
          this.height=height;
      }
      volume(){
          return this.long*this.width*this.height;
      }
      surfaceArea(){
          return(
              2*
              (this.long*this.width + 
                this.long*this.height +
                this.width*this.height)
          );
      }
  }
  const cuboi = new CuboidMake(4,5,5);
  console.log(cuboi.volume());
  console.log(cuboi.surfaceArea());
  