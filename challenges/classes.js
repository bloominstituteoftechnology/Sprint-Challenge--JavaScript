// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(first) {
        this.length = first.length;
        this.width = first.width;
        this.height = first.height;
    }
    volume() {
        return this.length * this.width * this.height
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }

}
class CubeMaker extends CuboidMaker {
    constructor(cube) {
        super(cube)
     
     }
     cubVolume() {
        return this.length * this.width * this.height
    }
    cubArea() {
        return 6 *(this.length * this.height)
    }
}
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
})
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

const stretch = new CubeMaker({
    length: 10,
    width: 6,
    height: 15,
})
console.log(stretch.cubArea());
console.log(stretch.cubVolume());