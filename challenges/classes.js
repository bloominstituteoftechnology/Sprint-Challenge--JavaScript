// 1. Copy and paste your prototype in here and refactor into class syntax.

// Base Class
class CuboidMaker{
    constructor(cuboidAttributes) {
        this.length = cuboidAttributes.length;
        this.width = cuboidAttributes.width;
        this.height = cuboidAttributes.height;
  }
  volume() {
    const volume = this.length * this.width * this.height;
    return volume;
  }
  surfaceArea() {
    const surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return surfaceArea;
  }
}
  
  

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.