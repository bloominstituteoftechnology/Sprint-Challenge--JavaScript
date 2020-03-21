// Test your volume and surfaceArea methods by uncommenting the logs below:

class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;

    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea(lw, lh, wh, total) {
        lw = this.length * this.width;
        lh = this.height * this.length;
        wh = this.width * this.height;
        total = lw + lh + wh;
        return total * 2;

    }
}
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.