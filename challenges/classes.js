// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker {
  constructor(props) {
    super(props);
  }
} //Volume and Surface Area formulas are the same, thus inherited Cuboid methods will suffice.

class TesseractMaker extends CuboidMaker {
  constructor(props) {
    super(props);
    this.rotation = props.rotation;
    this.power = props.power;
  }
  powerFour() {
    return this.height * this.width * this.length * this.rotation;
  }
  binaryPowerFour() {
    return 2 ** this.power;
  }
} //Cubes are boring, so let's make a tesseract ;)

const cuboid = new CuboidMaker ({
  'length': 4,
  'width': 5,
  'height': 5
});

const cube = new CubeMaker({
  'length': -11,
  'width': -12,
  'height': -13
})

const tesseract = new TesseractMaker({
  'length': 2,
  'width': 2,
  'height': 2,
  'rotation': 2,
  'power':4
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());
console.log(tesseract.powerFour());
console.log(tesseract.binaryPowerFour());

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
