// Copy and paste your prototype in here and refactor into class syntax.

/*  function CuboidMaker (l, w, h) {
    this.l = l
    this.w = w
    this.h = h
}

CuboidMaker.prototype.volume = function(l, w, h) {
  return this.l * this.w * this.h
}

CuboidMaker.prototype.surfaceArea = function(l, w, h) {
  return 2 * (this.l * (this.w + this.h) + (this.w * this.h))
}
       */

class CuboidMaker {
  constructor(l, w, h){
    this.l = l
    this.w = w
    this.h = h
  }
  volume(l, w, h) {
    return this.l * this.w * this.h
  }
  surfaceArea(l, w, h) {
    return 2 * (this.l * (this.w + this.h) + (this.w * this.h))
  }

}

const cuboid = new CuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.
  Find out the formulas for volume and surface area for cubes and create those
   methods as well.
   Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(l){
    super(l)
  }
  volume(l) {
    return this.l ** 3
  }
  surfaceArea() {
    return this.l**2 * 6
  }
}

const cube = new CubeMaker(3)
console.log(cube.volume());
console.log(cube.surfaceArea());
