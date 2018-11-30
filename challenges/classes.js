//#region Class declarations
class CuboidMaker {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(length) {
        super({
            'length': length,
            'width': length,
            'height': length
        });
    }

    // Leibniz Substitution Principle - no need to rewrite methods that provide the same interface
}
//#endregion

//#region Program
let cuboid = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5
});

let cube = new CubeMaker(5);

console.log(cuboid);
console.log(`Volume of the cuboid: ${cuboid.volume()}`); // 100
console.log(`Surface Area of the cuboid: ${cuboid.surfaceArea()}`); // 130

console.log(cube); //l: 5, w: 5, h: 5
console.log(`Volume of the cube: ${cube.volume()}`); //125
console.log(`Surface Area of the cube: ${cube.surfaceArea()}`); //150
//#endregion
