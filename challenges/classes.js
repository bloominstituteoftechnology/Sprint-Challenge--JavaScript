// 1. Copy and paste your prototype in here and refactor into class syntax.

class CubeMaker {
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
  
  const cube = new CubeMaker ({
    "length": 4,
    "width": 5,
    "height": 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log('Classes Test 1:', cube.volume()); // 100
console.log('Classes Test 2:', cube.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker2 extends CubeMaker {
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
  
  const cube2 = new CubeMaker2 ({
    "length": 42,
    "width": 9,
    "height": 21,
  });

  console.log('Strech Task 1:', cube2.volume());
console.log('Strech Task 2:', cube2.surfaceArea()); 