// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(lengthProp, width, height) {
        this.lengthProp = lengthProp;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.lengthProp * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.lengthProp * this.width + this.lengthProp * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(lengthProp) {
        super(lengthProp);
    }
    volume() {
        return Math.pow(this.lengthProp, 3);
    }
    surfaceArea() {
        return Math.pow(this.lengthProp, 2) * 6;
    }
}


const cuboid = new CuboidMaker(4, 5, 5);
const cube = new CubeMaker(10);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());

/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area.*/