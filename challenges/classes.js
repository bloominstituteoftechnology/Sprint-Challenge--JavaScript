// 1. Copy and paste your prototype in here and refactor into class syntax.

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
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 5, 
    width: 5, 
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(properties) {
        super(properties);

        // Boolean variable to check validity (a cube's dimensions must all be equal)
        this.hasValidDimensions = this.length && !this.width && !this.height    // if only one argument given
                                  || !this.length && this.width && !this.height // if only one argument given
                                  || !this.length && !this.width && this.height // if only one argument given
                                  || !this.width && this.length == this.height // two arguments -> must both be equal
                                  || !this.height && this.length == this.width // two arguments -> must both be equal
                                  || !this.length && this.width == this.height // two arguments -> must both be equal
                                  || this.length === this.width && this.width === this.height; // all 3 must be equal
    }
    volume() {
        return this.hasValidDimensions ?
            Math.pow(this.length || this.width || this.height, 3) :
            "Incorrect dimensions - this is not a real cube!";
    }
    surfaceArea() {
        return this.hasValidDimensions ?
            6 * (this.length || this.width || this.height) * (this.length || this.width || this.height) :
            "Incorrect dimensions - this is not a real cube!";
    }
}

const cube = new CubeMaker({
    length: 5,
    width: 5
});

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96