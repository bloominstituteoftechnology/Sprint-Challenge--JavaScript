// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(props) {
//     this.length = props.length;
//     this.width = props.width;
//     this.height = props.height;
// }

// CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function () {
//     return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
// }

class CuboidMaker2{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}


const cuboid2 = new CuboidMaker2(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// (student note: had to change name to 'cuboid2' since cuboid was used in the other script)

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// student note: I'm a bit confused by the problem statement.
// the formula for volume and surface area of a cube is the same as for a cuboid, but you can simplify it since the sides are all the same length to be: V = l^3 and SA = 6*(l^2)
// however, the problem says to create the volume and surface area methods using the dimension properies from CuboidMaker. I guess I'll just use the length property and not the others.

class CubeMaker extends CuboidMaker2{
    constructor(length){
        super(length, length, length);
    }
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker(3);

console.log(cube.volume()); // 27
console.log(cube.surfaceArea()); // 54