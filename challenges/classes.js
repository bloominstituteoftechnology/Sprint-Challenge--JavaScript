// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume(cuboidObj) {
    let volume = cuboidObj.length * cuboidObj.width * cuboidObj.height;
    return volume;
  }
  surfaceArea(cuboidObj) {
    let surfaceArea = 2 * (cuboidObj.length * cuboidObj.width + cuboidObj.length * cuboidObj.height + cuboidObj.width * cuboidObj.height);
    return surfaceArea;
  }
} // end of CuboidMaker


const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(cuboid)); // 100
console.log(cuboid.surfaceArea(cuboid)); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/