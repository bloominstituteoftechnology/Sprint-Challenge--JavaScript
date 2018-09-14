// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(dimensions) {
        this.length = dimensions.length;
        this.width = dimensions.width;
        this.height = dimensions.height;
    }

    volume() {
        return `The volume of the cuboid is ${this.length *this.width * this.height}`;
    }

    surfaceArea() {
    return `The surface area of the cuboid is ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
    }

    isCuboid() {
        return !(this.length === this.width && this.width  === this.height) ? "This is a cuboid" : "This is a cube";
    }
}

let cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cuboid.isCuboid());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(dimensions) {
        super(dimensions);
    }

    volume() {
        return `The volume of the cube is ${this.length ** 3}`;
    }

    surfaceArea() {
        return `The surface area of the cube is ${6 * (this.length ** 2)}`;
    }
}

let cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
});

console.log(cube.volume());
console.log(cube.surfaceArea());
console.log(cube.isCuboid());