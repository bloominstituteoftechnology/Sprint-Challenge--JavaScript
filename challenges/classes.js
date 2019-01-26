// 1. Copy and paste your prototype in here and refactor into class syntax.
console.log('hey')




// function CuboidMaker(attr){
//     this.length = attr.length;
//     this.width = attr.width;
//     this.height = attr.height; 
// }

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
// }


// CuboidMaker.prototype.surfaceArea = function () {
//     return 2 * (this.length *this.width + this.length * this.height + this.width * this.height); 
// }


class CuboidMaker {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length *this.width + this.length * this.height + this.width * this.height); 
    }
}

  
const cuboid = new CuboidMaker ({
    length: 4,
    width: 5, 
    height: 5
})  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker {
    constructor(attr){
      super(attr);
    }

    volume() {
      return(this.length * this.width * this.height);
    }

    surfaceArea() {
      return 6 * (this.length * this.width * this.height);
    }
  }
const cube = new CubeMaker ({
    length: 2,
    height: 2,
    width: 2
})

console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130
