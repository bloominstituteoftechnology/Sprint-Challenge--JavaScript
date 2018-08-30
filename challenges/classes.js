// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
constructor(objStuff){

  this.length = objStuff.length;
  this.width = objStuff.width;
  this.height = objStuff.height; 
}
  //volume
  volume(){
   return this.length * this.width * this.height
  }
  //Surace Area
surfaceArea(){
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}
}


const newOne = new CuboidMaker ({
  length:7,
  width:5,
  height:2
})











// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newOne.volume()); // 100
 console.log(newOne.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/