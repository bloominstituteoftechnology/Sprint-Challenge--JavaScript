// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(params) {
        this.length = params.length;
        this.width = params.width;
        this.height = params.height;
  }
    volume(length, width, height) {
    let formula = length * width * height;
    return formula
  }  
 
    surfaceArea(length, width, height) {
    let formula = (2 * (length * width + length * height + width * height));
    return formula
  }  
}

  const cuboid = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5
  })
    
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.