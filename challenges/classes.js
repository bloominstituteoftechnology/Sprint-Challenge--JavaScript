// 1. Copy and paste your prototype in here and refactor into class syntax.


class cube {
    CuboidMaker(length, width, height) {
        this.length = length;
        this.width = width
        this.height = height;
      }
}

class volumePro {
    CuboidMaker.prototype.volume = function volumeMaker() {
    return this.length * this.width * this.height;
  }
}


  Class surfacePro {
      CuboidMaker.prototype.surfaceArea = function surfaceAreaMaker() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}
    
  const cuboid = new CuboidMaker(4, 5, 5);
  const cuboidOne = new CuboidMaker(4, 5, 5);  



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.