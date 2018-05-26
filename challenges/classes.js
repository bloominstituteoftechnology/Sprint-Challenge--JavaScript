// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props) {
    this.height = props.height;
    this.length = props.length;
    this.width  = props.width;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  height: 5,
  length: 4,
  width: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


console.log('\n\n\.................................................\n= Stretch Task: \n.................................................\n')
/* Stretch Task:
  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
*/

class CubeMaker extends CuboidMaker {
  constructor (cubedimensions) {
    super (cubedimensions);
    this.length = cubedimensions.length;
  }
  volume() {
    return Math.pow(this.length,3)
  }
  surfaceArea() {
    return 6 * (Math.pow(this.length,2))
  }
}

const cube = new CubeMaker({
 length: 10
})

console.log(`cube volume is: ` + cube.volume() + ` based on ${cube.length}`);
console.log('cube surfece is: ' + cube.surfaceArea()+ ` based on ${cube.length}`);