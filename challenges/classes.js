// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(properties){
  this.length = properties.length;
  this.width = properties.width;
  this.height = properties.height;
  }

  volume(length, width, height) {
  return this.length * this.width * this.height;
  }

  surfaceArea(length, width, height){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

}

class CubeMaker extends CuboidMaker {
  constructor (cubeProperties){
    super(cubeProperties);
  }
  cubeVolume(length, width, height){
      return this.length * this.width * this.height;
  }

  cubeSA(){
      return 6 * (this.length * this.height);
  }

}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker({
  length: 3,
  width: 3,
  height: 3
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
// cuboid
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// cube
console.log(cube.cubeVolume()); // 27
console.log(cube.cubeSA()); // 54


/* Stretch Task:
  Extend the base class CuboidMaker with a sub class called CubeMaker.
   Find out the formulas for volume and surface area for cubes and 
   create those methods as well. Create a new cube object and log 
   out the results of your new cube.
*/

// Stretch ^^