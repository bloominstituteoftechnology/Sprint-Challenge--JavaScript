/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker(options) {
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
CuboidMaker.prototype.volume = function() {
    return this.length * this.width * this.height;
};

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130
 
 
 //stretch??
 
function CubeMaker(options){
    CuboidMaker.call(this, options);
    this.volume = function() {
        return Math.pow(this.length, 3);
    };
}
CubeMaker.prototype.surfaceArea = function() {
        return 6 * (this.length * this.length);
    };
CuboidMaker.prototype = Object.create(CubeMaker.prototype);


const cube = new CubeMaker({
    length: 8,
    width: 8,
    height: 8
});

console.log(cube.volume());
console.log(cube.surfaceArea());


