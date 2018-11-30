// 1. Copy and paste your prototype in here and refactor into class syntax.


//***** I WAS GETTING ERRORS FOR HAVING THE SAME DECLARATIONS ON PROTOTPES.JS, SO I CHANGED THE NANES  ******/

class Cuboid2 {
  constructor (attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume () {
    return `${this.length}` * `${this.width}` * `${this.height}`;
  }
  surfaceArea() {
    return (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this.height}`) * 2;
  }
}


const cubey2 = new Cuboid2 ({
  length: 4,
  width: 5,
  height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubey2.volume()); // 100
console.log(cubey2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//This must be an old stretch task because it's just part of the normal instructions now,