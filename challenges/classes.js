// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
  constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume(){
    return(this.length * this.width * this.height);
  }
  surfaceArea(){
    let sa = 2 * ((this.length*this.width) + (this.length*this.height) + (this.width*this.height));
    return(sa);
  }
}

const cuboid = new CuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
//The formulas for Cube and Cuboid are the same. 
//Just need to set height, width, length to edge value. 
class CubeMaker extends CuboidMaker{
  constructor(attr){
    super(attr);
    this.edge = this.length = this.width = this.height = attr.edge;
  }
}

const cube = new CubeMaker({
  'edge': 5
})

console.log(cube.volume(), cube.surfaceArea()); // 