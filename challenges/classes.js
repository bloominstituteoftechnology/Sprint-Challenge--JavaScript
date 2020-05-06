// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)) * 2;
    }
}
class Cuboid2 extends CuboidMaker2 {
    constructor(length, width, height) {
        super(length, width, height)
    }
}
let squared = new Cuboid2(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(squared.volume()); // 100
console.log(squared.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
// class CubeMaker extends CuboidMaker2 {
//     constructor(length, width, height) {
//         super(length, width, height)
//         this.length = length;
//         this.width = width;
//         this.height = height;
//     }
//     surfaceArea() {
//         return (this.length * this.width) * 6;
//     }
// }
// console.log(CubeMaker.volume(5, 5, 5));
// console.log(CubeMaker.surfaceArea(5, 5));