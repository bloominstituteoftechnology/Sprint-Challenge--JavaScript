



// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker2{
    constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  };
  volume() {
    return this.length * this.width * this.height; 
  };
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
};
  
class CubeMaker extends CuboidMaker2{
    constructor(attrs) {
        super(attrs);
        this.surface = attrs.surface;
    };
    cubeVolume() {
        return this.surface * this.surface * this.surface;
    }
    cubeSurface() {
        return 6 * (this.surface * this.surface)
    };
};
    
  const cuboid2 = new CuboidMaker2({
    length : 4,
    width: 5,
    height: 5
  });
  
  const cube1 = new CubeMaker({
      length: 5,
      width: 5,
      height: 5,
      surface: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube1.cubeVolume()); // 125
console.log(cube1.cubeSurface()); // 150 