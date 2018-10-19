// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(param) {
        this.length = param.length;
        this.width = param.width;
        this.height = param.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return (
            2 *
            (this.length * this.width +
                this.length * this.height +
                this.width * this.height)
        );
    }
}

class CubeMaker extends CuboidMaker {
    constructor(param) {
        super(param);
    }
    cubeVol() {
        return this.length ^ 3;
    }
    cubeSurface() {
        return (6 * this.length) ^ 2;
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.cubeVol());
console.log(cube.cubeSurface());

/* Stretch Task: Extend the base class CuboidMaker with a sub class called 
CubeMaker.  Find out the formulas for volume and surface area for cubes and 
create those methods using the dimension properties from CuboidMaker.  Test 
your work by logging out your volume and surface area. */
