// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attributes) {
        this.length = attributes.length,
            this.width = attributes.width,
            this.height = attributes.height
    }
    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        return (this.length * this.width * 2 + this.length * this.height * 2 + this.width * this.height * 2);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeatts) {
        super(cubeatts);
    }
    cubeVolume() {
        return (this.length * 3 + this.width * 3 + this.height * 3);
    }
    cubeArea() {
        return (this.length * 6 + this.width * 6 + this.height * 6);
    }
}



let cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

let cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3

});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130]

//Strech Task Answer:
console.log(cube.cubeVolume());
console.log(cube.cubeArea());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.