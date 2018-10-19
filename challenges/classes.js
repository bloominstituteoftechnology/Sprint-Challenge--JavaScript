// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
//needs to be called class remember that
class CuboidMaker { // remove the (arg) thingy
    constructor(cubObj) { // use constructor keyword
        this.length = cubObj.length;   //this shit is fine
        this.width = cubObj.width;
        this.height = cubObj.height
    }// constructor finished yo
    //need to put all those methods and stuff in here
    //first up is the volume method
    volume() {
        return this.length * this.width * this.height;
    }
    // surfaceArea method next
    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.