// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
constructor(dimensions) {
  this.length = dimensions.length;
  this.width = dimensions.width;
  this.height = dimensions.height;
}
volume () {
  let volume = (this.length * this.width * this.height);
  return volume
};
sArea () {
  console.log((this.length * this.width + this.width * this.height + this.length * this.height) * 2);
};
}

const cuboid = new CuboidMaker ({
  'length': 5,
  'width': 7,
  'height': 9,
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.sArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/