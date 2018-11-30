// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(attributes){
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }

//   CuboidMaker.prototype.volume = function(){
//     let total = this.length * this.width * this.height;
//     return `${total}`;
//   }


//   CuboidMaker.prototype.surfaceArea = function(){
//     let total = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//     return `${total}`;
//   }


//   const cuboid = new CuboidMaker({
//     length:4,
//     width:5,
//     height:5
//   });

class CuboidMakerClass {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        let total = this.length * this.width * this.height;
        return `${total}`;
    }
    surfaceArea() {
        let total = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return `${total}`;
    }
}

const cuboid2 = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass{
    
}