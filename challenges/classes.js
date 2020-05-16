// 1. Copy and paste your prototype in here and refactor into class syntax.
class CircleMaker {
    constructor(diameter) {
        this.diameter = diameter;
    }
    area() {
        return Math.PI * Math.pow((this.diameter / 2), 2);
    }
    circumference() {
        return 2 * Math.PI * (this.diameter / 2);
    }
}


const circle = new CircleMaker(5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
class SphereMaker extends CircleMaker {
    constructor(diameter) {
        super(diameter);
    }
    volume() {
        return 4 / 3 * Math.PI * Math.pow(this.diameter / 2, 3);
    }
    area() {
        return 4 * Math.PI * Math.pow(this.diameter / 2, 2); 
    }
}

const sphere = new SphereMaker(5);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.