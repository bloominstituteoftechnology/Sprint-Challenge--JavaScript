// Copy and paste your prototype in here and refactor into class syntax.

// 
// Test your volume and surfaceArea methods by uncommenting the logs below:
//  console.log(cuboid.volume()); // 100
//  console.log(cuboid.surfaceArea()); // 130

 
 
 /* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area.
//  Cuboids are similar to cubes but do not have even sides. 
//  Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class cuboidMaker{
	constructor (cuboidAttr){
    this.length = cuboidAttr.length;
    this.width = cuboidAttr.width;
    this.height = cuboidAttr.height;
	
  }
	
	volume(length,width,height){

return this.length * this.width * this.height
	}
	
	surfaceArea(length,width,height){

return  (2 * (this.length * this.width + this.length * this.height + this.width * this.height));

}

}


/* == Step 4: Create a new object that uses CuboidMaker ==
+  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
+  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/


const cuboid = new cuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5,
});

 console.log(cuboid.volume())
 console.log(cuboid.surfaceArea())