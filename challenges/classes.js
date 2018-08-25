// Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



/* Stretch Task:
  Extend the base class CuboidMaker with a sub class called CubeMaker.
  Find out the formulas for volume and surface area for cubes and create
  those methods as well.  Create a new cube object and log out the results of your new cube.
*/


/* Notes: Since one of the points of inheritance is to reuse code, we do not want
   to redefine our perfectly good volume and surfaceArea methods.  Instead, we will
   use our side length property to set the length, width, and height appropriately.
   *IMPORTANT*  This requires that we enforce these relationships -- the side length
   should only be set either through the constructor or by using the setSide method!
   (Does JavaScript have a mechanism for class data encapsulation?)

    Since we only have a single property, we will use that directly as a parameter
    instead of passing a properties object.

*/
class CubeMaker extends CuboidMaker {
    constructor(sideLength) {
        super({length: sideLength, width: sideLength, height: sideLength});
        this.side = sideLength;
    }

    setSide(sideLength) {
        this.side = sideLength;
        this.length = sideLength;
        this.width = sideLength;
        this.height = sideLength;        
    }
}

const cubey = new CubeMaker(3);

console.log(cubey.volume());
console.log(cubey.surfaceArea());

cubey.setSide(4);

console.log(cubey.volume());
console.log(cubey.surfaceArea());
