// 1. Copy and paste your prototype in here and refactor into class syntax.




class CuboidMaker {
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
    return 2*((this.length*this.width)+(this.length*this.height)+(this.width*this.height));    
    }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


// ^^^ what sense does this make?  A cube is a cuboid where length = width = height... so all the methods defined in cuboid will still give the proper volume and surfaceArea for a cube....  below are redundantly defined methods as asked?  am i interpereting these directions wrong??

class CubeMaker extends CuboidMaker{
    constructor(attributes){
        super(attributes);
    }
    cubeVolume() {
        return this.length*this.length*this.length;
    }
    cubeSurfaceArea(){
        return 6*(this.length*this.length);
    }
}