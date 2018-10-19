// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
  constructor(dimension){
    this.length = dimension.length;
    this.width = dimension.width;
    this.height = dimension.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

class CubeMaker extends CuboidMaker{
  constructor(cubeDimensions){
    super(cubeDimensions);
    this.side = cubeDimensions.side;
  }
  cubeVolume(){
    return this.side ** 3;
  }
  cubeSA(){
    return 6*(this.side ** 2);
  }
}

const cuboid = new CubeMaker({
  length: 4,
  width: 5,
  height: 5,
  side: 4
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cuboid.cubeVolume()); //64
console.log(cuboid.cubeSA()); //96
// // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//  Find out the formulas for volume and surface area for cubes and create those
//  methods using the dimension properties from CuboidMaker.
//  Test your work by logging out your volume and surface area.
