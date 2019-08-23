// 1. Copy and paste your prototype in here and refactor into class syntax.

class CubeboidMaker {
    constructor(attributes) {
        this.newlength = attributes.length,
            this.newWidth = attributes.width,
            this.newHeight = attributes.weight
    }
}

CubeboidMaker() {
    return `${this.length} * ${this.width} * ${this.height}`
}

CubeboidMaker() {
    return `${this.length} * ${this.width} + ${this.length} * ${this.height} + ${this.width} * ${this.height}`
}
class CubeboidMakerTwo extends CubeMaker {
    constructor(CubeboidMakerTwoattributes) {
        super(CubeboidMakerTwoattributes);
        this.newLength = CubeboidMakerTwoattributes.length
        this.newWidth = CubeboidMakerTwoattributes.width
        this.newHeight = CubeboidMakerTwoattributes.weight
    }
}

const Q - boid = new CubeboidMakerTwo({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Q - boid.volume(4, 5, 5)); // 100
console.log(Q - boid.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.