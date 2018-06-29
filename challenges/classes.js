// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(args){
    this.length = args.length;
    this.width = args.width;
    this.height = args.height;
  }

  volume(){
    return this.height * this.length * this.width;
  }

  surfaceArea(){
    return 2 * ((this.length * this.width) + (this.width * this.height) + (this.height * this.length));
  }
}

const lilCuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(lilCuboid.volume()); // 100
console.log(lilCuboid.surfaceArea()); // 130
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(args){
    super(args)
      this.edge = args.edge;
  }
  volume(){
    return this.edge ** 3;
  }

  surfaceArea(){
    return 6 * this.edge ** 2;
  }
}

const lilCube = new CubeMaker({
  edge: 4,
});

console.log(lilCube.volume());
console.log(lilCube.surfaceArea());
