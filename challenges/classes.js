// 1. Copy and paste your prototype in here and refactor into class syntax.
function CubiodMaker(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height
  };
  CubiodMaker.prototype.volume = function(length, width, height) {
    return (length * width * height);
  };
  CubiodMaker.prototype.surfaceArea = function(length, width, height){
    return 2 * (length * width + length * height + width * height);
   };


   class CubiodMakerClass {
       constructor(length, width, height){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height  
   }
   volume (length, width, height){
       return length * width * height;
   }
   surfaceArea (length, width, height){
       return 2 * (length * width + length * height + width * height);
   }
};

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume(4, 5, 5)); 100
 console.log(cuboid.surfaceArea(4, 5, 5));  130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CubiodMaker {
    constructor(attributes){
        super(attributes)
        this.volume = attributes.volume;
        this.surfaceArea = attributes.surfaceArea;
    };
}
console.log(CubeMaker.volume(4, 5, 5));
console.log(CubeMaker.surfaceArea(4, 5, 5));