// Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume() {
    return this.length * this.width * this.height; //cuboid volume: length * width * height
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); //surface area of a cube: 2 * (length * width + length * height + width * height)
  }
}


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
let cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(props) {
    super(props);
  }
  cubeVolume() {
    return (this.width * this.height * this.width);
  }
  cubeSurfaceArea() {
    return 6 * (this.width * this.width);
  }
}

let cube = new CubeMaker({
  width: 4,
  height: 4,
})

console.log(cube.cubeVolume())
console.log(cube.cubeSurfaceArea())