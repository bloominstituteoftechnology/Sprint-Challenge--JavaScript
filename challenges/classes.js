// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


/*
function CuboidMaker(attributes) {
  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;
}
*/
class CuboidMaker {
  constructor(cuboid_attributes) {
    this.dimensions = cuboid_attributes.dimensions;
    /*
    this.length = cuboid_attributes.length;
    this.width = cuboid_attributes.width;
    this.height = cuboid_attributes.height;
    */
  }
  volume() {
   let vol = 0;
                // test if dimensions is not an empty  { }
          if(Object.keys(this.dimensions).length !== 0) {
            vol = 1;
            for(var key in this.dimensions) {    // iterate over dimensions to provide volume
            vol *= this.dimensions[key];
          }
        }

   return vol;

   /*   if(Object.keys(this.dimensions).length !==0 ){    // easier way if dimensions are static
        let dim = this.dimensions;
        return dim.length * dim.width * dim.height;
      }
      return 0; */
  }
  surfaceArea() {
    let dim = this.dimensions;
    return (2* (dim.length * dim.width + dim.length * dim.height + dim.width * dim.height) );
  }
}



/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height

  Formula for cuboid volume: length * width * height

CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
};
*/
/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a
  given cuboid's length, width, and height.

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)

CuboidMaker.prototype.surfaceArea = function() {
  return (2* (this.length * this.width + this.length * this.height + this.width * this.height) );
};
*/

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
*/
var cuboid = new CuboidMaker({
  dimensions: {
    length: 4,
    width: 5,
    height: 5
  }
});

var cuboid2 = new CuboidMaker({
  dimensions: { }
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume());
//console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and
  surface area for cubes and create those methods as well.
  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor (cubeMaker_attributes) {
    super(cubeMaker_attributes);
    this.sideLength = cubeMaker_attributes.sideLength;
  }
  cubeVolume() {
    return Math.pow(this.sideLength, 3);
  }
  cubeSurfaceArea () {
    return 6*(Math.pow(this.sideLength, 2));
  }
}

var cube = new CubeMaker({sideLength: 2});

// console.log(cube.cubeVolume());
// console.log(cube.cubeSurfaceArea());