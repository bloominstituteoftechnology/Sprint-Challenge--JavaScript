// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

/* == Step 1: Base Constructor == */




class CuboidMaker {
  constructor(attribute){
    this.length = attribute.length;
    this.width = attribute.width;
    this.height = attribute.height;
  }


/* == Step 2: Volume Method == */


volume() {
  return this.length * this.width * this.height;
}
  


/* == Step 3: Surface Area Method == */
 

surfaceArea() {
  return 2 * (this.length * this.width + this.length * this.height + this.width *this.height);
}
  

}


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
