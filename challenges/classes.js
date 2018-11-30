// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(properties) {
//     this.length = properties.length;
//     this.width = properties.width;
//     this.height = properties.height;
//   };
  
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   };
  
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   };

class CuboidMaker { 
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width *this.height);

    }
}

const newCuboid = new CuboidMaker({
length: 4,
width: 5,
height: 5,
});

console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130
  
