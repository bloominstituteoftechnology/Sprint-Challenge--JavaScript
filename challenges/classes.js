// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
class CuboidMaker {
constructor (attributes){
  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;
  }
  volume() {
    let output = this.length * this.width * this.height;
  return output
  }
  surfaceArea(){
    let pt1 = this.length * this.width;
  let pt2 = this.length * this.height;
  let pt3 = this.width * this.height;
  let pt4 = pt1 + pt2 + pt3;
  return 2 * pt4;
  }
}


const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/