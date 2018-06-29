// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(properties) {
  this.length = properties.length;
  this.width = properties.width;
  this.height = properties.height;
  }
  volumizer() {
    return (this.length * this.height * this.width)
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.height * this.width + this.length * this.height)
  }
}

const lilCubo = new CuboidMaker ({
  "length": 4,
  "width": 5,
  "height": 5,
  })



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(lilCubo.volumizer()); // 100
console.log(lilCubo.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor (props) {
    super(props);
  }
  cubeVolume() {
    return Math.pow(this.length, 3)
  }
  cubeSA() {
    return 6 * (Math.pow(this.length, 2))
  }
}


const lilCube = new CubeMaker ({
  "length": 5,
  "width": 5,
  "height": 5,
  })

console.log(lilCube.cubeVolume()); // 125
console.log(lilCube.cubeSA()); // 150
