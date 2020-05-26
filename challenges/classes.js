// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1{
    constructor (length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
    }
//    this.volume = lenght * width * height;
//    this.surfaceArea = length * width + length * height + width * height;

// Test your volume and surfaceArea methods by uncommenting the logs below:
    vol(){
        return this.length * this.width * this.height;
};

sur(){ 
    return (2 * (this.length * this.width + this.height * this.length + this.width * this.height))
};};


const cuboidthingy = new CuboidMaker1 (4, 5, 5);
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cuboidthingy.vol()); // 100
console.log(cuboidthingy.sur()); // 130