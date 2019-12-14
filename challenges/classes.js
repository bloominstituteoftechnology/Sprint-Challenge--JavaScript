// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
// }

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
// }


// CuboidMaker.prototype.surfaceArea = function() {
//     const { length, width, height } = this;
//     return 2 * (length * width + length * height + width * height)
// }

class CuboidMaker {
    constructor({ height, width, length }) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        const { length, width, height } = this;
        return 2 * (length * width + length * height + width * height)
    }
}

const cuboid =  new CuboidMaker({
    height: 4,
    width: 5,
    length: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.