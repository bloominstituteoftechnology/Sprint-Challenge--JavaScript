// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CuboidMaker{
  constructor(inputs){
  this.length = inputs.length;
  this.width = inputs.width;
  this.height = inputs.height;
  }
  volume(){
    console.log(this.length * this.width * this.height);
  }
  surfaceArea(){
    console.log(2*(this.length * this.width + this.length * this.height + this.width * this.height));
  }
}

class Cube extends CuboidMaker{
  constructor(cubeInputs){
    super(cubeInputs);
  }
  cubeVolume(){
    console.log(Math.pow(this.length, 3));
  }
  surfaceAreaCube(){
    console.log(6* Math.pow(this.length, 2));
  }
}

// CuboidMaker.prototype.volume = function(){
//   console.log(this.length * this.width * this.height);
// }

// CuboidMaker.prototype.surfaceArea = function(){
//   console.log(2*(this.length * this.width + this.length * this.height + this.width * this.height));
// }
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5 
});

const cube = new Cube({
  length: 4,
  width: 4,
  height: 4 
});

console.log(cube.volume());
console.log(cube.surfaceAreaCube());
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
