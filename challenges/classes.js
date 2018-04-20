// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(data) {
    this.length = data.length;
    this.width = data.width;
    this.height = data.height;
  }
  volume() {
    return this.length*this.width*this.height;
  };
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
}

// Strech Solution
class CubeMaker extends CuboidMaker {
  constructor(data) {
    super(data);
    this.edge = data.edge;
  }
  cubeVolume() {
    return Math.pow(this.edge, 3);
  }
  cubeSurfaceArea() {
    return 6*(Math.pow(this.edge, 2));
  }
} 

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Strech
const newCube = new CubeMaker ({
  edge: 3
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Strech
console.log(newCube.cubeVolume());
console.log(newCube.cubeSurfaceArea());

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/