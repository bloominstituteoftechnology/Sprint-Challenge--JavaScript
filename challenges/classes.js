// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor (properties) {
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
  }
  volume() {
    return (this.length * this.width * this.height); 
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(cubeProps) {
    super(cubeProps);
  }
  cubeSurfArea () { 
    // Since all sides of a cube are the same, the surface area of a cube is 6 times one of the sides squared
    return Math.pow(this.length, 2) *6;
  }
    // formula for volume of a cube is the same formula as volume of a cuboid, no extra function needed
    // decided to use perimeter instead of volume
  cubePerimeter () {
    return this.length * 12;
  }
};


const cube = new CubeMaker({
  length: 3,
  width: 3,
  height: 3
});

console.log(cube.cubeSurfArea());
console.log(cube.volume());
console.log(cube.cubePerimeter());