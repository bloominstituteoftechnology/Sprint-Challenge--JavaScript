/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
  constructor(args) {
    this.width = args.width;
    this.length = args.length;
    this.height = args.height;
  }
  volume() {
    return `I'm building a Cuboid Volume from args ${this.width} ${this.height} ${this.length} this.length * this.width * this.height`;
  }

}




/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  CuboidMaker.prototype.volume
  Formula for cuboid volume: length * width * height
*/

CuboidMaker.prototype.volume = function(length, width, height) {
  return(length * width * height);
}
const cuboid = Object.create(CuboidMaker.prototype);

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
CuboidMaker.prototype.surfaceArea = function(length, width, height) {
  return( 2 * ((length * width) + length) * ((height * width) + height));
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(5, 5, 5)); // 100
console.log(cuboid.surfaceArea(5, 5, 5)); // 130


