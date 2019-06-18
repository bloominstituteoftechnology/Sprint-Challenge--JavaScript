// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker1 {
    constructor({
        length,
        width,
        height
    }) {

        this.length = length;

        this.width = width;
        this.height = height;
    }
    volume() {

        return this.length * this.width * this.height;
    }

    surfaceArea() {

        return 2 * (this.length * this.width * this.length * this.height * this.width * this.height);
    }




}
class CubeMaker extends CuboidMaker1 {

    constructor({
        ...height
    }) {

        super(height)

    }

    cubeVol() {

        return Math.pow(this.height, 3)

    }

    cubeArea() {

        return 6 * (Math.pow(this.height, 2))
    }

}
const cube = new CubeMaker({




    height: 12




})


const cuboid1 = new CuboidMaker1({

    length: 4,

    width: 5,

    height: 5

});

const cube = new CubeMaker({

    height: 12
})

const cuboid1 = new CuboidMaker1({

    length: 4,
    width: 5,
    height: 5
});
console.log(cube.cubeVol());
console.log(cube.cubeArea());
console.log(cuboid1.volume());
console.log(cuboid1.surfaceArea())