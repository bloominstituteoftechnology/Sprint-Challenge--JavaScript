/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. 
//Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish 
//this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties 
  for length, width, and height
*/


/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume 
  of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the 
  surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

// Test your volume and surfaceArea methods by uncommenting the logs below:
function CuboidMaker(attributes) {
  //properties
  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;
}
//methods
  CuboidMaker.prototype.volume = function() {
    console.log((this.length)*(this.width)*(this.height));
  }
  CuboidMaker.prototype.surfaceArea = function() {
    console.log(2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
}
 const funCube = new CuboidMaker({
   length: 4,
   width: 5,
   height: 5,
 });
 console.log(funCube.volume()); // 100
console.log(funCube.surfaceArea()); // 130

