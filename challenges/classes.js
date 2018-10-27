// 1. Copy and paste your prototype in here and refactor into class syntax.




/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/


//---------------------------------------------------------------------------------------constructor function
class CuboidMaker { //start
    constructor(attr) {
    this.lgth = attr.lgth;
    this.width = attr.width;
    this.height = attr.height
  }
  volume() {
    return this.lgth * this.width * this.height;
  }

  surfaceArea() {
    return (2 * (this.lgth * this.width + this.lgth * this.height + this.width * this.height));
  }
}//end


//---------------------------------------------------------------------------------------creation of new object
  
  const cuboid = new CuboidMaker({
    lgth: 4,
    width: 5,
    height: 5
  });
  

//---------------------------------------------------------------------------------------TEST OBJECT
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130




// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker { //start
    constructor(attr) {
        super(attr);
    }

    
    cubeVolume() {
        return Math.pow(this.lgth, 3);
    }

    
    cubeArea() {
        return 6*(Math.pow(this.lgth, 2));
    }
} //end

const cube = new CubeMaker({
    lgth: 5,
    width: 5,
    height: 5,
});


console.log(cube.cubeVolume());
console.log(cube.cubeArea());