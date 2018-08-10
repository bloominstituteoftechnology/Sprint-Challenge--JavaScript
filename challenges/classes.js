// Copy and paste your prototype in here and refactor into class syntax.


  class CuboidMaker {

    constructor(CuboidMakerAttr){

  this.length = CuboidMakerAttr.length;
  this.width = CuboidMakerAttr.width;
  this.height = CuboidMakerAttr.height;

    }

      volume() {
      return (this.length * this.width * this.height);
      }

        surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
        }
  
  }
  
  
  
  
  
  const cuboid = new CuboidMaker({
  length : 4,
  width: 5,
  height: 5
  }
  );
  
  
  
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(CubeMakerAttr){
    super(CubeMakerAttr);
    this.side = CubeMakerAttr.side;
    //this.width = CubeMakerAttr.width;
    //this.height = CubeMakerAttr.height;
  }
   volume() {
    return Math.pow(this.side,3);
    }

    surfaceArea() {
      return 6 * Math.pow(this.side,2) ;
      }

}


const cube = new CubeMaker({
  side: 4
});


console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96