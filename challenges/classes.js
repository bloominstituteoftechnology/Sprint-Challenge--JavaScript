// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume(cuboidObj) {
    let volume = cuboidObj.length * cuboidObj.width * cuboidObj.height;
    return `V = ${volume} u^3`;
  }
  surfaceArea(cuboidObj) {
    let surfaceArea = 2 * (cuboidObj.length * cuboidObj.width + cuboidObj.length * cuboidObj.height + cuboidObj.width * cuboidObj.height);
    return `Surface Area = ${surfaceArea} u^2`;
  }
} // end of CuboidMaker

class CubeMaker extends CuboidMaker {
  constructor(cubeProps) {
    super(cubeProps);
  }
  cubeSurfaceArea(cubeObj) {
    let cubeSurfaceArea = 6 * (cubeObj.length * cubeObj.width);
    return `Surface Area = ${cubeSurfaceArea} u^2`;
  }
} // end of CubeMaker


const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker ({
  length: 3,
  width: 3,
  height: 3
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(cuboid)); // 100
console.log(cuboid.surfaceArea(cuboid));
console.log(cube.volume(cube)); //125
console.log(cube.cubeSurfaceArea(cube)); // 150

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/