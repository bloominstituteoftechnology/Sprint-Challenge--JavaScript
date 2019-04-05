// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(cuboid){
    this.length = cuboid.length;
    this.width = cuboid.width;
    this.height = cuboid.height;
  }
  volume(){
    return this.length*this.width*this.height;
  }
  
  surfaceArea(){
    return 2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

class CubeMaker extends CuboidMaker2{
    constructor(cube){
        super(cube);
    }
    cubeSurfaceArea(){
        return 2*(6*this.length);
    }
}
  
  
  const cuboid2 = new CuboidMaker({
    length:4,
    width:5,
    height:5
  });

  const cube = new CubeMaker({
    length:10,
    width:10,
    height:10
  })
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid2.volume()); // 100
 console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.surfaceArea());
console.log(cube.cubeSurfaceArea());