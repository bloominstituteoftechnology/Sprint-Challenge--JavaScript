/* Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker (cuboid) {
  this.length=cuboid.length;
  this.width=cuboid.width;
  this.height=cuboid.height;
}

CuboidMaker.prototype.volume = function () {
  var vol = (this.height*this.length*this.width);
  return vol;
  console.log(vol);
};
CuboidMaker.prototype.surfaceArea = function() {
  var sarea = 2*( (this.length*this.width) + (this.length*this.height) + (this.width * this.height) );
  return sarea;
  console.log(sarea);
}
*/
class CuboidMaker {
  constructor (cuboid) {
    this.length=cuboid.length;
    this.width=cuboid.width;
    this.height=cuboid.height;
  };
  volume () {
    var vol = (this.height*this.length*this.width);
    return vol;
    console.log(vol);
  };
  surfaceArea () {
    var sarea = 2*( (this.length*this.width) + (this.length*this.height) + (this.width * this.height) );
    return sarea;
    console.log(sarea);
  };
}

var cuboid = new CuboidMaker ({length:4, width:5, height:5});
//Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/