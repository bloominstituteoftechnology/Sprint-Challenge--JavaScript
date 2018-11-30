// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(attributes){
      this.length = attributes.length;
      this.width = attributes.width;
      this.height = attributes.height;
    }

    volume(){
      return (this.length * this.width * this.height);
    }
  
    surfaceArea(){
      return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
  }

  class CubeMaker extends CuboidMakerClass {
      constructor(cubeAttrs){
        super(cubeAttrs)
      }
    
      cubeVolume(){
          return (this.length * this.width * this.height);
      }

      cubeSurfaceArea(){
          return (6 * (this.length * this.length));
      }
  }

  const cuboidClass = new CuboidMakerClass ({
    length: 4,
    width: 5,
    height: 5,
  });

  const cube = new CubeMaker ({
      length: 2,
      width: 2,
      height: 2,
  })
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130
console.log(cube.cubeSurfaceArea()); // 24
console.log(cube.cubeVolume()); // 8

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.