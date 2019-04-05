// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

// function CuboidMaker(size){
//     this.length = size.length
//     this.height = size.height
//     this.width = size.width
//   }
//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.height * this.width
//   }
//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//   }
  
//   let cuboid = new CuboidMaker({
//     length: 4,
//     height: 5,
//     width: 5
//   })
  

  // Test your volume and surfaceArea methods by uncommenting the logs below:
//   console.log(cuboid.volume()); // 100
//   console.log(cuboid.surfaceArea()); // 130

  class CuboidMaker{
    constructor(size){
        this.length = size.length
        this.height = size.height
        this.width = size.width

    }
    volume(){
        return this.length * this.height * this.width
      }
      surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      }

  }


  let cuboid = new CuboidMaker({
    length: 4,
    height: 5,
    width: 5
  })

  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130