// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes 


function CuboidMaker(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
    
  }

  CuboidMaker.prototype=  function (volume) {
    return length * width * height;
  };

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });


  //refactor

  class CuboidMaker {
      constructor(CubAttributes) {
        this.length = CubAttributes.length;
        this.width = CubAttributes.width;
        this.height = CubAttributes.height;
      }
      volume() {
          console.log(length * width * height);
      }
  }

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });