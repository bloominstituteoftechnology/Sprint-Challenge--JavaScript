// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension 
// properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker{
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
};

CuboidMaker.prototype.volume = function(length, width, height){
  return this.length * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function(length, width, height){
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});


// CUBE
class CubeMaker extends CuboidMaker{
  constructor(cubeAttributes){
    super(cubeAttributes);
  }
}

CubeMaker.prototype.volume = function(length){
  return Math.pow(this.length, 3);
};

CubeMaker.prototype.surfaceArea = function(length, width, height){
  return 6* Math.pow(this.length, 2);
};

const cube = new CubeMaker({
  length: 10
})

// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// console.log(cube.volume()); // 1000
// console.log(cube.surfaceArea()); // 600