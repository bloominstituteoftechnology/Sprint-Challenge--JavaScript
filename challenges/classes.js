// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
  };
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */

 class Volume extends CuboidMaker = {
    constructor(surfaceAttrs){
        super(surfaceAttrs);
        this.length = surfaceAttrs.length;
        this.height = surfaceAttrs.height;
        this.width = surfaceAttrs.width;
    }
    demo(surfaceAttrs) {
        return this.length * this.width * this.height;
  };

  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

 class SurfaceArea extends CuboidMaker = {
    constructor(surfaceAttrs){
        super(surfaceAttrs);
        this.length = surfaceAttrs.length;
        this.height = surfaceAttrs.height;
        this.width = surfaceAttrs.width;
    }
    demo(surfaceAttrs) {
        return this.length * this.width + this.length * this.height + this.width * this.height;
  };



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.