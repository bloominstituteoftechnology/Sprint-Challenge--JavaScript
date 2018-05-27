// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

// NOTE: cuboids have different measurements for each dimension
class CuboidMaker {
  constructor(obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
    this.type = 'cuboid';
  }
  welcome() {
    let str = `\nWelcome to 3d geometry time! For a ${
      this.type
    } with dimensions `;

    if (this.type == 'cuboid') {
      str += `${this.length} x ${this.width} x ${this.height}`;
    } else if ((this.type = 'cube')) {
      str += `${this.side} x ${this.side} x ${this.side}`;
    }
    str += `, \nthe volume is: ${this.volume()} units cubed\nthe surface area is: ${this.surfaceArea()} units squared`;

    return str;
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

// NOTE: cubes have the same measurement for each dimension
class CubeMaker extends CuboidMaker {
  constructor(obj) {
    super(obj);
    this.side = obj.side;
    this.type = 'cube';
  }
  volume() {
    return Math.pow(this.side, 3);
  }
  surfaceArea() {
    return 6 * (this.side * this.side);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

const cube = new CubeMaker({
  side: 5,
});

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150

console.log(cuboid.welcome());
// making sure cube inherited the welcome method
console.log(cube.welcome());
