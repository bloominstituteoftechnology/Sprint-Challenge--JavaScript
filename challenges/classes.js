// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(Attributes){
      this.length = Attributes.length;
      this.width = Attributes.width;
      this.height = Attributes.height;  
    }
    volume() {
      return `${this.length}` * `${this.width}` * `${this.height}`;
    };
    surfaceArea() {
        return 2 *  (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this.height}`);
    };
  }

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

//Stretch
  class CubeMaker extends CuboidMaker {
      constructor(cubeAtrributes) {
          super(cubeAtrributes); 
      }

    volumeCube() {
        return Math.pow(`${this.length}`, 3); //volume of a cube is V = a^3 or V = length × width × height all sides should be equal though
    };
    surfaceAreaCube() {
        return 6 * Math.pow(`${this.length}`, 2); // surface area of a cube is A = 6a^2 or A = 6 * (l × w, w × h, or h × l)
    };
  }


  const cube = new CubeMaker({
      length: 4,
      width: 4,
      height: 4,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// Stretch logs
console.log(cube.volumeCube());
console.log(cube.surfaceAreaCube());