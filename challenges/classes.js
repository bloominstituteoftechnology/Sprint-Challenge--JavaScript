// Copy and paste your prototype in here and refactor into class syntax.



class CuboidMaker{
  constructor(properties){
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker{
  constructor(cubeProperties){
    super(cubeProperties)
    this.edge = cubeProperties.edge;
    this.length = cubeProperties.edge;
    this.width = cubeProperties.edge;
    this.height = cubeProperties.edge;

  }
  volume(){
    return Math.pow(this.edge,3);
  }
  surfaceArea(){
    return  6 * Math.pow(this.edge,2);   
  }
}

const cuboid = new CuboidMaker({
  length: 4, 
  width: 5,
  height: 5
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

const cube = new CubeMaker({
  edge : 5
})

console.log(cube.volume())
console.log(cube.surfaceArea())