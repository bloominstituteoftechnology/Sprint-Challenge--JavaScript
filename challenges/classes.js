console.warn('classes.js');
// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(l, w, h) {
//       this.l = l;
//       this.w = w;
//       this.h = h;
// }

// CuboidMaker.prototype.volume = function() {
//       return this.l * this.w * this.h;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//       return 2 * ((this.l * this.w) + (this.l * this.h) + (this.w * this.h));
// }

//Named it CuboidMakerClass only because in prototypes.js CuboidMaker is already defined!
class CuboidMakerClass {
    constructor(props){
        this.l = props.l;
        this.w = props.w;
        this.h = props.h;
    }

    volume() {
        return this.l * this.w * this.h;
    }

    surfaceArea() {
        return 2 * ((this.l * this.w) + (this.l * this.h) + (this.w * this.h));
    }
    
}

// let cuboid2 = new CuboidMakerClass(4, 5, 5);
let cuboid2 = new CuboidMakerClass({
    l: 4,
    w: 5,
    h: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(props) {
        super(props);
    }

    cubeVolume() {
        return (Math.pow(this.l, 3));
    }

    cubeArea() {
        return 6 * (Math.pow(this.l, 2));
    }
}

let cube = new CubeMaker({
    l: 3,
    w: 3,
    h: 3
});

console.log(cube.cubeVolume());
console.log(cube.cubeArea());