// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor (l, w, h) {
    this.length = l
    this.width  = w
    this.height = h
  }

  volume() {
    const {length: l, width: w, height: h} = this
    return l * w * h 
  }

  surfaceArea() {
    const {length: l, width: w, height: h} = this
    return 2 * (l * w + l * h + w * h)
  }
}

const cuboid = new CuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
