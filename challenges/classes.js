/* Stretch Task:

  Create a base class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
  Extend to previous prototype CuboidMaker.
*/

// Copy and paste your prototype in here and refactor into class syntax.
class CubeMaker {
  constructor(property) {
    this.dimension = property.dimension;
  }
  volume(dimension) {
    return(this.dimension ** 3);
  }
  surfaceArea(dimension) {
    return(6*(this.dimension**2));
  }
}
const cube = new CubeMaker({
  dimension:5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150

class CuboidMaker extends CubeMaker {
  constructor(properties) {
    super(properties)
    this.width = properties.width;
    this.height = properties.height;
  }
  volume(dimension,width,height) {
    return(this.dimension*this.width*this.height);
  }
  surfaceArea(dimension,width,height) {
    return(2*(this.dimension*this.width + this.dimension*this.height + this.width*this.height));
  }
}

const cuboid = new CuboidMaker({
  dimension:4,
  width:5,
  height:5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


