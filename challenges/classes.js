// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cuboids) {
    this.length = cuboids.length;
    this.width = cuboids.width;
    this.height = cuboids.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  area() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cuboidsRevenge = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidsRevenge.volume()); // 100
console.log(cuboidsRevenge.area()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(cubes)  {
    super(cubes);
    this.sides = cubes.sides;
  }
  cubeVol() {
    return Math.pow(this.sides, 3)
  }
  cubeArea() {
    return 6 * (Math.pow(this.sides, 2));
  }
}

const riseOfCube = new CubeMaker({
  'sides': 5
})

console.log(riseOfCube.sides);
console.log(riseOfCube.cubeVol());
console.log(riseOfCube.cubeArea());

