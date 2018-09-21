// 1. Copy and paste your prototype in here and refactor into class syntax.
class cuboid {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
        // Test your volume and surfaceArea methods by uncommenting the logs below:
        console.log(cuboid.volume()); // 100
        console.log(cuboid.surfaceArea()); // 130
        // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
    }
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
subclass; CuboidMaker;
    constructor(attributes); 
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    
    // vol() {
    //     return Math.pow(side, exponent);
    // }
    // surf() {
    //     return Math.pow(side, base, exponent);
    // }

      
          console.log(CuboidMaker.vol(6,4));
          console.log(CuboidMaker.surf(6,5,3));