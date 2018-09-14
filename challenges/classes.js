// 1. Copy and paste your prototype in here and refactor into class syntax.



  class CuboidMaker  {
      constructor(properties) {
          this.length = properties.length;
          this.width = properties.width;
          this.height = properties.height
      }
      volume () {

        return (this.length * this.width * this.height);
      }
      surfaceArea() {
        return 2 *  (this.length * this.width + this.length * this.height + this.width * this.height);
      }


  };

  
  
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker {
  constructor(properties) {
    super(properties)
  }
  volume () {
    return this.length * this.width * this.height
  }

  surfaceArea () {
    return 6 * Math.pow(this.length, 2);
  }
}


const newCube = new CuboidMaker({
  length: 5,
  width: 5,
  height: 5
});