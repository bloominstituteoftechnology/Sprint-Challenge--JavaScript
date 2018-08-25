// Copy and paste your prototype in here and refactor into class syntax.
/*function CuboidMaker (length, width, height){
  this.length = length;
  this.width = width;
  this.height = height
}*/

class CuboidMaker {
  constructor (length, width, height){
    this.length = length;
    this.width = width;
    this.height = height
  }
  volume (){
    return this.length * this.width * this.height;
  }
  surfaceArea (){
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
} 


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/