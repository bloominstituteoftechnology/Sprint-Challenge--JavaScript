// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(cuboid) {
    this.length = cuboid.length;
    this.width = cuboid.width;
    this.height = cuboid.height;
  }

  volume() {
    let vol = this.height * this.length * this.width;
    return vol;
  }

  surfaceArea() {
    let sArea =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);
    return sArea;
  }
}

cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker. 
  Find out the formulas for volume and surface area for cubes and create 
  those methods as well.  Create a new cube object and log out the results 
  of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(cube) {
    super(cube);
  }

  cubeVolume() {
    let cVol = this.length * this.length * this.length;
    return cVol;
  }

  cubeSurfaceArea() {
    let cSA = 6 * (this.length * this.length);
    return cSA;
  }
}

cube = new CubeMaker({ length: 5 });
console.log(cube.cubeSurfaceArea());
console.log(cube.cubeVolume());
