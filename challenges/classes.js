// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or 
// surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order 
// to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker{
    constructor(object){
    this.newlength = object.length;
    this.newwidth = object.width;
    this.newheight = object.height; 
}
volume() {
    return `Cuboid volume = ${this.newlength*this.newwidth*this.newheight}`;
  }
  area(){
    return `Surface Area = ${2 * (this.newlength * this.newwidth + this.newlength * 
      this.newheight + this.newwidth * this.newheight)}`;
  }
  }
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
 

  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given 
    cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)*/

   
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  let cuboid  = new CuboidMaker({
    length:4,
    height:5,
    width:5
  
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.area()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.