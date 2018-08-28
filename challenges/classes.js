// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CuboidMaker {
  constructor(options) {                          
    this.dimensions = options.dimensions;
  }                           
  volume() {
    let temp = this.dimensions.length * this.dimensions.width * this.dimensions.height;
    return temp;
  }
  surfaceArea() {
    return 2 * (this.dimensions.length * this.dimensions.width + this.dimensions.length * this.dimensions.height + this.dimensions.width * this.dimensions.height);
  }
  };

  const cuboid = new CuboidMaker({
    dimensions: {
    length: 4,
    width: 5,
    height: 5 
  }
  });

  class CubeMaker extends CuboidMaker {
    constructor(options) {
        super(options)
        this.side = options.side;
    }
    cubeVolume() {
      return Math.pow(this.side,3);
    }
    cubeSurface() {
      return (this.side * this.side) * 6;
    }
  }

const cube = new CubeMaker ({
    length: 4,
    width: 5,
    height: 5,
   side: 6,
  });


  console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130
 console.log(cube.cubeVolume());
 console.log(cube.cubeSurface());