// 1. Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker(dimensons) {
    this.length = dimensons.length;
    this.width = dimensions.length;
    this.height = dimensions.height;
  }

  CuboidMaker.prototype.volume = function() {
    return this.length * this.width * this.length;
  }

  CuboidMaker.prototype.surfaceArea = function() {
    return 2 * this.length * this.width + this.length * this.height + this.width + this.height;
  }
// refactor
  class CubeMaker {
      constructor(dimensons) {
          this.length = legnth;
          this.width = width;
          this.length = length;
      }
      volume() {
          return this.length * this.width * this.height;
      }
      surfaceArea() {
        return 2 * this.length * this.width + this.length * this.height + this.width + this.height;
      }
  }



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.