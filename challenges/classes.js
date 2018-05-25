// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/


class CuboidMaker{
  constructor(args){
    this.length = args.length;
    this.width = args.width;
    this.height = args.height;
  }
}


CuboidMaker.prototype.volume = function(){
  return this.length * this.width * this.height;
}


CuboidMaker.prototype.surfaceArea = function(){
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});


console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

class CubeMaker extends CuboidMaker {
  constructor(attrs) {
    super(attrs);
  }
  cubevolume(){
    return this.length * this.length * this.length;
  }
  cubesurface(){
    return 6 * this.length;
  }
}

const cube = new CubeMaker({
  length: 4,
});

console.log(cube.cubevolume()); // 100
console.log(cube.cubesurface()); // 130
