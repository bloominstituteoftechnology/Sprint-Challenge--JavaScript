/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker(length, width, height){
    this.length = length; 
    this.width = width; 
    this.height = height; 
}

CuboidMaker.prototype.volume = function(){
  return this.length * this.width * this.height; 
}

CuboidMaker.prototype.surfaceArea = function(){
  let sum = 0; 
  sum += this.length * this.width + this.length * this.height + this.width * this.height; 
    return sum * 2; 
}

let cuboid = new CuboidMaker(4, 5, 5); 

 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130


