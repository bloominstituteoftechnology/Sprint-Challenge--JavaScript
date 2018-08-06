// Copy and paste your prototype in here and refactor into class syntax.

function CuboidMaker(attributes){
  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;
}

//volume method

CuboidMaker.prototype.volume = function(){
  return (this.length)*(this.width)*(this.height);
};


//surfaceAcrea method

CuboidMaker.prototype.surfaceArea = function(){
    return 2*((this.length)*(this.width)+(this.length)*(this.height)+(this.width)*(this.height));
};


//new cuboid object
const cuboid = new CuboidMaker({length: 4, width: 5,height: 5});


//refactored into class syntax.

class CuboidMaker{
  constructor(attributes){
  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;    
  }
  volume() {
  return (this.length)*(this.width)*(this.height);
  }  

  surfaceArea() {
    return 2*((this.length)*(this.width)+(this.length)*(this.height)+(this.width)*(this.height));
  }
}
 
//Stretch Task

class CubeMaker extends CuboidMaker{
  constructor(cubeattributes){
    super(cubeattributes);
  }

  volumeCube() {
  return (this.length)*(this.width)*(this.height);
  }

  surfaceAreaCube() {
    return 6*(Math.pow(this.length, 2));
  }
}



const cuboid = new CuboidMaker({length: 4, width: 5,height: 5});
const cube = new CubeMaker({length: 5, width: 5, height: 5}); 

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

console.log(cube.volumeCube()); // 125
console.log(cube.surfaceAreaCube()); //150

Tested and logged correct results

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
*/
