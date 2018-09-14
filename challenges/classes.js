

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube {
    constructor (length) {
        this.length = length;
    }
    volume () {
        return Math.pow(this.length, 3);
    }
    surfaceArea () {
        return 6*(this.length * this.length);
    }
}
// Did it the other way around because CuboidMaker is a more complex version of Cube, and thus should derive from the simpler base Cube.
// For further information, see this article I wrote (a decade or more ago) on the subject:
// http://files.byondhome.com/IainPeregrine/arcana/all_rectangles.html


// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker extends Cube{
  constructor (length, width, heightth){
    super(length);
    this.width = width;
    this.height = heightth;
  }
  volume () {
    return this.length * this.width * this.height;
  }
  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
const cuboid = new CuboidMaker(4, 5, 5); 



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
