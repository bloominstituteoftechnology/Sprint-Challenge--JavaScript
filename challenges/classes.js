/* Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker (obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }

  CuboidMaker.prototype.volume = function () {
    const vol = (this.height*this.length*this.width);
    return vol;
  }

CuboidMaker.prototype.surfaceArea = function() {
    const sarea = 2*( (this.length*this.width) + (this.length*this.height) + (this.width * this.height) );
    return sarea;
  }
*/
class CuboidMaker {
    constructor (obj) {
      this.length = obj.length;
      this.width = obj.width;
      this.height = obj.height;
    };
    volume () {
      const vol = (this.height*this.length*this.width);
      return vol;
    };
    surfaceArea () {
      const sarea = 2*( (this.length*this.width) + (this.length*this.height) + (this.width * this.height) );
      return sarea;
    };
  }
  
  const cuboid = new CuboidMaker ({length:4, width:5, height:5});
  //Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  
  /* Stretch Task:
    Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
  */
 class CubeMaker extends CuboidMaker {
    constructor(obj) {
      super(obj); 
    }
    CubeVol(obj) {
      const volume = this.width*this.length*this.height;
      return volume;
    };
    CubeSArea(obj) {
      const sarea= 6*(this.width*this.height);
      return sarea;
    };
  }
  
  const Cube = new CubeMaker ({width:8, length:8, height:8});
  console.log(Cube.CubeVol()); // 512
  console.log(Cube.CubeSArea()); // 384git