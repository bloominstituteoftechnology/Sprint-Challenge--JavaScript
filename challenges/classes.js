// 1. Copy and paste your prototype in here and refactor into class syntax.
CuboidMaker.prototype.volume = function (attributes){
    return(this.length * this.width * this.height);
  }

  class CuboidMaker {
    constructor(attirbutes) {
    this.length = attributes.length;
    this.width = atrributes.length;
    this.height = attribtues.height;
  };

  volume () {
      return (this.length * this.width * this.height);
  }
}

/////////  Next Problem ///////

  CuboidMaker.prototype.surfaceArea = function (attributes){
    return(2*((this.length * this.width) * (this.length + this.height) + (this.width * this.height)));
  } 

  class CuboidMaker {
    constructor(attirbutes) {
    this.length = attributes.length;
    this.width = atrributes.length;
    this.height = attribtues.height;
  };

  surfaceArea() {
      return (2*((this.length * this.width) * (this.length + this.height) + (this.width * this.height)));}
  }

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.