// 1. Copy and paste your prototype in here and refactor into class syntax.
/*Original parent
function CuboidMaker(attributes){
  this.length = attributes.length,
  this.width = attributes.width,
  this.height = attributes.height
}

CuboidMaker.prototype.volume = function(){
  return this.length * this.width * this.height;

  CuboidMaker.prototype.surfaceArea = function(){
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);

  const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

*/


//Refactored into CLASS 

class CuboidMaker1{
    constructor(attributes){
    this.length = attributes.length,
    this.width = attributes.width,
    this.height = attributes.height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);  
    }
}

const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1{
    constructor(cubeAttr){
        super(cubeAttr);
    }
    volumeCube(){
      return this.length * this.width * this.height;
    }
    surfArea(){
        return 6 * [(this.length)*(this.length)*(this.length)];
    }
}

const cube = new CubeMaker({
  length: 8,
  width: 8,
  height: 8
})

console.log(cube.volumeCube());
console.log(cube.surfArea());