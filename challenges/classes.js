// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor (attributes) {
      this.length = attributes.length;
      this.width = attributes.width;
      this.height = attributes.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    }
  }
  
  const cuboid = new CuboidMaker ({
    "length": 4,
    "width": 5,
    "height": 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log('Classes Test 1:', cuboid.volume()); // 100
console.log('Classes Test 2:', cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(childAttributes) {
      super(childAttributes);    
    }  
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    } 
  } 
  
  const cube = new CuboidMaker ({
    "length": 42,
    "width": 9,
    "height": 21,
  });

  console.log('Strech Task 1:', cube.volume());
console.log('Strech Task 2:', cube.surfaceArea()); 