// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:

class CuboidMaker {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height
    }
    volume() {return this.length * this.width * this.height;} 
    surfaceArea() {return 2*(this.length * this.width + this.length * this.height + this.width * this.height)}
}

const cuboid = new CuboidMaker({
    height:5,
    width:5,
    length:4
});
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//  Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cubeProperties) {
        super(cubeProperties)
    }
    cubeVolume() {
        return this.length * this.length * this.length
    }
    surfaceAreaCube() {
        return 6*this.length * this.length
    }
}