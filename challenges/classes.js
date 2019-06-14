// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// function CuboidMaker (props) {
//     this.length = props.length;
//     this.width = props.width;
//     this.height = props.height;
//   }
  
//   CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height;
//   }
  
//   CuboidMaker.prototype.sa = function () {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }
//   function SmallCube(props) {
//     CuboidMaker.call(this, props);
//   }
  
//   SmallCube.prototype = Object.create(CuboidMaker.prototype);
  
//   const cuboid = new SmallCube ({
//     length: 4,
//     width: 5,
//     height: 5
//   })
  
  
//   // CuboidMaker.prototype.surfaceArea = function 
  
//   console.log(cuboid.volume()); // 100
//   console.log(cuboid.sa()); // 130

class CuboidMaker {
    constructor (props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volume () {
        return this.length * this.width * this.height;
    }
    sa () {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class SmallCube extends CuboidMaker {
    constructor (props) {
        super(props); 
    }
}

  const cuboid = new SmallCube ({
    length: 4,
    width: 5,
    height: 5
  })

console.log(cuboid.volume()); // 100
console.log(cuboid.sa()); // 130