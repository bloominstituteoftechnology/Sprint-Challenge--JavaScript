// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// 100
//  // 130

class CuboidMaker {
  constructor(attributes) {
  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;
  
}
volume() {
return(this.length* this.width* this.height)
}
surfaceArea() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}
class CubeMaker extends CuboidMaker {
  constructor(childattributes){
    super(childattributes)
  this.length = childattributes.length;
  this.width = childattributes.width;
  this.height = childattributes.height;
}
volume(){
  return 2 * (this.length* this.width* this.height)
}
surfaceArea() {
  return 4 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5,
})

const cube = new CubeMaker ({
  length: 8,
  width: 10,
  height: 10,
})

console.log(cuboid.volume()); 
console.log(cuboid.surfaceArea());
console.log(cube.volume()); 
console.log(cube.surfaceArea());
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/