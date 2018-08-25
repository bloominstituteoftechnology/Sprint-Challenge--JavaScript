// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cubeAttribute) {
    this.length = cubeAttribute.length;
    this.width = cubeAttribute.width;
    this.height = cubeAttribute.height;
  }

  volume(){
    return `${this.length*this.width*this.height}`;
  }

  surfaceArea(){
    return `${2*(this.length*this.width+this.length*this.height+this.width*this.height)}`
  }
}

class CubeMaker extends CuboidMaker {
  constructor(cubeMakerAttribute) {
    super(cubeMakerAttribute)
  }
  cubeVolume(){
    return `${this.length*this.length*this.length}`
  }
  cubeSurfaceArea(){
    return `${6*(this.length*this.length)}`
  }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

const newcube = new CubeMaker({length: 5});

//Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); 
console.log(cuboid.surfaceArea()); 
console.log(newcube.cubeVolume());
console.log(newcube.cubeSurfaceArea());






/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/