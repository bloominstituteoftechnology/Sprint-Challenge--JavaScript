// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (attributes) {
//   this.length = attributes.length;
//   this.width = attributes.width;
//   this.height = attributes.height;
// }

class CuboidMaker {
    constructor(obj) {
        this.length = obj.length;
        this.width = obj.width;
        this.height = obj.height;
    }
    volume(length, width, height) {
        let vol = length * width * height;
        return vol;
    }

    surfaceArea(length, width, height) {
        let sfArea = 2 * (length * width + length * height + width * height);
        return sfArea;
    }

}

// CuboidMaker.prototype.volume = function (length, width, height) {
//     let vol = length * width * height;
//     return vol;
// }

// CuboidMaker.prototype.surfaceArea = function (length, width, height) {
//     let sfArea = 2 * (length * width + length * height + width * height);
//     return sfArea;
// }

const firstCuboidObj = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

const cuboid = new CuboidMaker({
    length:8,
    width:10,
    height:10,
});




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor() {
        super();
        this.length = cubeObj.length;
        this.width = cubeObj.width;
        this.height = cubeObj.height;
    }
    volumeCube(length) {
        let volCube = length * length * length;
        return volCube;
    }

    surfaceAreaCube(length, width, height) {
        let sfAreaCube = 6 * (Math.pow(length, 2));
        return sfAreaCube;
    }


}

const cube1 = new CubeMaker({
    length:8,
    width:8,
    height:8,
});

console.log(cuboid.volumeCube());
console.log(cuboid.surfaceAreaCube());
