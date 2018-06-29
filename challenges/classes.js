// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
  constructor(specs) {
  this.length = specs.length;
  this.width = specs.width;
  this.height = specs.height;
}
 doMath (length,width,height)
 {
 console.log(length * width * height)
 }


 doMath (length,width,height){
  console.log(2 * (length * width + length * height + width * height))
} 
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/