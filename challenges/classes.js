// 1. Copy and paste your prototype in here and refactor into 
//class syntax.


class CuboidMaker{
    constructor(length,width,height){
        this.length = length;
        this.height = height;
        this.width = width;
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height +
            this.width * this.height);
    }
}


console.log('Cklasses ');

let cuboid = new CuboidMaker(5,5,4);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// console.log(c.volume()); // 100
// console.log(c.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class 
//called CubeMaker.  Find out the formulas for volume and surface area for
// cubes and create those methods using the dimension properties 
//from CuboidMaker.  Test your work by logging out your volume and surface 
//area.

class CubeMaker extends CuboidMaker{
    constructor(a,b,c){
        super(a,b,c);
        this.cubeMakerValue = 0;
    }
    makeAcube(c,d){
        this.cubeMakerValue = c * d;
    }
    theCube(){
        return this.cubeMakerValue;
    }
}
let cube  = new CubeMaker(5,5,4);
console.log('With the strech goal');
console.log('Volume '+cube.volume()); // 100
console.log('Surface Area '+cube.surfaceArea()); // 130
cube.makeAcube(cube.volume(),cube.surfaceArea());
console.log('The cube with surface area and volume '+ cube.theCube());


