// Copy and paste your prototype in here and refactor into class syntax.

// 
Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

 
 
 /* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area.
//  Cuboids are similar to cubes but do not have even sides. 
//  Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class cubeMaker{
	constructor (cuboidAttr){
    this.length = cuboidAttr.length;
	this.width = cuboidAttr.width;
	this.height = cuboidAttr.height;
	
  }
	
	volume(length,width,height){

return (length) * (width) * (this.height)
	}
	
	surfaceArea = (length,width,height){

surface = 2 * (length * width + length * height + width * height);
return surface
}

}
	


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the 
  surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
cuboid.prototype.surfaceArea = function(length,width,height){

//surface = 2 * (length * width + length * height + width * height);
//return surface
//}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/


const cuboid = new cubeMaker({
  'length': 4,
  'width': 5,
  'height': 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker. 
  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/