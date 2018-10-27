class CuboidMaker {
    constructor(qualities) {
        this.length = qualities.length;
        this.width = qualities.width;
        this.height = qualities.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5

});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

class CubeMaker extends CuboidMaker {
    constructor(qualities) {
        super(qualities);
    }
    cubeVolume() {
        return Math.pow(this.length,3);
    }
    cubeSurfaceArea() {
        return 6*Math.pow(this.length,2);
    }
}

const cube = new CubeMaker({
    length: 2,
    width: 2,
    height: 2
});

console.log(cube.cubeVolume()); // 8
console.log(cube.cubeSurfaceArea()); // 24