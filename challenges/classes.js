// Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
  constructor(obj) {
    this.length = obj.length ;
    this.width = obj.width ;
    this.height = obj.height ;

  }
  volumeOf(length, width, height){

    return length * width * height ;
  }

  surfaceArea(length, width, height){

    let lengthWidth = length * width;
    let lengthHeight = length * height;
    let widthHeight = width * height;
  
    let dimensionValues = lengthWidth + lengthHeight + widthHeight ;
  
    return 2 * dimensionValues ;
  }
}

const cuboid = new Cuboid({length: 4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volumeOf(4,5,5)); // 100
console.log(cuboid.surfaceArea(4,5,5)); // 130
console.log(cuboid);
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/