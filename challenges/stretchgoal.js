class CubeMaker extends CuboidMaker {
    constructor (cubeAttr){
        super(cubeAttributes);
        this.length = cubeAttributes.length;
    }
    volume() {
        console.log(Math.pow(this.length, 3));
    }
    surfaceArea() {
        console.log(((this.length * this.length)) * 6);
    }
}

const cube = new CubeMaker ({
    length: 4
});

console.log(cube.volume());
console.log(cube.surfaceArea());