// Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
  constructor (attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume(length, width, height){
    let volume = `${this.length}`*`${this.width}`*`${this.height}`;
    return volume;
  };
  surfaceArea(length, width, height){
    let surface_area = 2*((this.length * this.width) + (this.length* this.height) + (this.width * this.height));
    return surface_area;
  };
}

class CubeMaker extends CuboidMaker {
  constructor(cubeAttributes){
    super(cubeAttributes);
    
  }

  surfaceArea(length, width, height){
    let surface_area = 6*(this.length * this.width);
    return surface_area;
  };
}

const cuboid_obj = new CuboidMaker ({
  "length": 4,
  "width": 5,
  "height": 5
});

const cube_obj = new CubeMaker ({
  "length": 7,
  "width": 7,
  "height": 7
});
/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid_obj.volume()); // 100
console.log(cuboid_obj.surfaceArea()); // 130
console.log(cube_obj.volume()); 
console.log(cube_obj.surfaceArea()); 



/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/