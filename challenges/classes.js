

// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidClass {
    constructor(atters){
        this.length = atters.length;
        this.width = atters.width;
        this.height = atters.height;
    }
    //prototypes below
    volume(){
        console.log(`${this.length*this.width*this.height}`); 
    }
    surfaceArea(){
        console.log(`${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`);
    }
  }

class CubeMaker extends CuboidClass {
    constructor(cubeAtters){
      super(cubeAtters);
      this.side = cubeAtters.side;
    }
    volume(){
      console.log(Math.pow(this.side, 3)); 
    }
    surfaceArea(){
      console.log(`${6 * Math.pow(this.side, 2)}`);
    }
}

  const cuboidClass = new CuboidClass({
    length: 4,
    width: 5,
    height: 5,
  });


  const cube = new CubeMaker({
    side: 2,
  });

  //option 1 - long way....use code smarter....exponents...because all the sides are the same
  // const cube = new CubeMaker({
  //   length: 2,
  //   width: 2,
  //   height: 2,
  // });
// original from prototype assignment below, checked, works, returns 100 and 130
// function CuboidMaker(atters){
//     this.length = atters.length;
//     this.width = atters.width;
//     this.height = atters.height;
//   }
//   CuboidMaker.prototype.volume = function(){return `${this.length*this.width*this.height}`}
//   CuboidMaker.prototype.surfaceArea = function(){ return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`}

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.