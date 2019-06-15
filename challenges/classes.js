// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
    constructor(features) {
        this.length = features.length;
        this.width = features.width;
        this.height = features.height;

    }

    // CuboidMakerClass.prototype.volume = function () { return this.length * this.width * this.height};

    volume() {
        return this.length * this.width * this.height;
    }

    // CuboidMakerClass.prototype.surfaceArea = function () {
    //     return (this.length * this.width * this.length * this.height + this.width * this.height)
    // };
    surfaceArea() {
        return this.length * this.width * this.length * this.height + this.width * this.height;
    }
}
const cuboidSquared = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidSquared.volume()); // 100
console.log(cuboidSquared.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.