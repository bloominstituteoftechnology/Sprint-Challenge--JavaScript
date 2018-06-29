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
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const thomas = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(thomas.volume()); // 100
console.log(thomas.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.


*/
class CubeMaker extends CuboidMaker {
  constructor(CubeMakerproperties) {
  super(CubeMakerproperties);
  this.area = CubeMakerproperties.area;
  }
  cubeVolume () {
    return (this.area * this.area * this.area);
  }
  cubeSurfaceArea () {
    return (6 * Math.pow(this.area, 2));
  }
};

const cubie = new CubeMaker({
  area: 7
});

console.log(cubie.cubeVolume())
console.log(cubie.cubeSurfaceArea())


