// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(dimensions){
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
    }//methods here:
    volume(){
        return this.length * this.width * this.height;
    };

    surfaceArea(){
            return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)))
        };
  }//end cuboid maker


  class CubeMaker extends CuboidMaker{
      constructor(cubeDimensions){
          super(cubeDimensions);
      }//methods here:
      cubeVolume(){
          return this.length * this.width * this.height  ;
      }
      cubeSurfaceArea(){
          return (6 * (this.length * this.length))
      }
  }//end cubemaker


    const cuboid = new CuboidMaker({
        length: 4,
        width: 5, 
        height: 5
    })

    const cube = new CubeMaker({
        length: 3,
        width: 3,
        height: 3
    })
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.cubeVolume()); // 27
console.log(cube.cubeSurfaceArea()); // 54
console.log(cube.volume()); // 27
console.log(cube.surfaceArea()); // 54




/*
Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods using the 
dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
*/

//I don't believe making new functions was necessary... The cuboidMaker's functions will give the same answer and the child CubeMaker has access to those functions anyway. 

