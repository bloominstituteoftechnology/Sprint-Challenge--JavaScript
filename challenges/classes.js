// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(properties){
        this.newLength = properties.length;
        this.newWidth = properties.width;
        this.newHeight = properties.height;
    }
    volume(){
        return (this.newLength * this.newWidth * this.newHeight);
    }

    surfaceArea(){
        return (2 * ((this.newLength * this.newWidth) +(this.newLength * this.newHeight) + (this.newHeight * this.newWidth)));
    }
};


/*CuboidMaker.prototype.volume = function(){
    return (this.newLength * this.newWidth * this.newHeight);
}; 

CuboidMaker.prototype.surfaceArea = function(){
    return (2 * ((this.newLength * this.newWidth) +(this.newLength * this.newHeight) + (this.newHeight * this.newWidth)));
}; 
*/

const cuboid2 = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5,
});
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods 
using the dimension properties from CuboidMaker.  Test your work by logging out your 
volume and surface area. */