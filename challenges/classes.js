// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


class CuboidMaker {
  constructor(prop){
  this.length = prop.length;
  this.width = prop.width;
  this.height = prop.height;
  }
  volume (){
  return `Volume ${this.length * this.width * this.height}`;
  } 
  surfaceArea() {
    return `Surface ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
  }
}

const cube1 = new CuboidMaker({
  'length':4,
  'width': 5,
  'height':5,
});

console.log(cube1.volume());
console.log(cube1.surfaceArea());

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube1.volume()); // 100
console.log(cube1.surfaceArea()); // 130




/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/