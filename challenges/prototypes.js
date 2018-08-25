/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function cuboidMaker (length, width, height){
  this.length = length;
  this.width = width;
  this.height = height;

}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

cuboidMaker.prototype.volumeOf = function (length, width, height){

  return length * width * height ;
}

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

cuboidMaker.prototype.surfaceArea = function (length, width, height){

  let lengthWidth = length * width;
  let lengthHeight = length * height;
  let widthHeight = width * height;

  let dimensionValues = lengthWidth + lengthHeight + widthHeight ;

  return 2 * dimensionValues ;
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

let newCuboid = new cuboidMaker({
  length: 4, width: 5, height: 5})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volumeOf(4,5,5)); // 100
console.log(newCuboid.surfaceArea(4,5,5)); // 130


