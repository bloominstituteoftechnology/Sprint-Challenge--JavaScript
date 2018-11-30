// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


class CubeMaker extends CuboidMaker {
    constructor(cubeAttribs) {
        super(cubeAttribs);
    }
    cubeVolume() {
        return this.length * this.width * this.height;
    }
    cubeSA() {
        return 6 * (this.length * this.length);
    }
}

const cuboid = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
const cube = new CubeMaker({
    'length': 6,
    'width': 6,
    'height': 6,
});

const cubeTwo = new CubeMaker({
    'length': 5,
    'width': 5,
    'height': 5,
})

console.log(cube.cubeVolume()); // 216
console.log(cube.cubeSA()); //216
console.log(cubeTwo.cubeVolume()); //125
console.log(cubeTwo.cubeSA()); //150