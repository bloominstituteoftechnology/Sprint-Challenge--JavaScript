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
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

let cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.
  Find out the formulas for volume and surface area for cubes and create those methods as well.
  Create a new cube object and log out the results of your new cube.

*/
// Note: there is no need to create volume and surface area methods. The same formula for the cuboid will work
// for the cube as well. A cube is just a cuboid with same length, height and width
class CubeMaker extends CuboidMaker {
  constructor(sideLength) {
    super({
      length: sideLength,
      width: sideLength,
      height: sideLength
    });
  }
}

let cube = new CubeMaker(5);
console.log(cube.volume()); // sideLength ^ 3
console.log(cube.surfaceArea()); // 6 * sideLength ^ 2
