// Copy and paste your prototype in here and refactor into class syntax.

/*let CuboidMaker= function(info){
  this.length= info.length;
  this.width= info.width;
  this.height= info.height;
}

CuboidMaker.prototype.volume = function(){
  let vol= this.length*this.width*this.height;
  return vol;
};

CuboidMaker.prototype.surfaceArea= function(){
  let sA= 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  return sA;
}*/

class CuboidMaker {
  constructor(info) {
    this.length=info.length;
    this.width= info.width;
    this.height= info.height;
  }
  volume(){
    let vol= this.length*this.width*this.height;
    return vol;
  }
  surfaceArea(){
    let sA= 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  return sA;
  }
}


let cuboid= new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
  });

  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/