// 1. Copy and paste your prototype in here and refactor into class syntax.
/*************************************************************************************************
 ********************************************** MVP **********************************************
 *************************************************************************************************/
//==================================== Class ====================================
class CuboidMaker {
  //------------------------- Constructor -------------------------
  constructor(obj){
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }
  //-------------------------- Method(s) --------------------------
  volume(){
    return this.length * this.width * this.height;
  }

  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

//==================================== Object ===================================
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

//==================================== Tests ====================================
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
console.log('*********************** MVP ***********************')
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/*************************************************************************************************
 ******************************************** Stretch ********************************************
 *************************************************************************************************/
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
//==================================== Class ====================================
class CubeMaker extends CuboidMaker {
  //------------------------- Constructor -------------------------
  constructor(obj){
    super(obj);
    this.area = obj.area;
  }
  //-------------------------- Method(s) --------------------------
  cubeVolume(){
    return Math.pow(this.area, 3);
  }

  cubeSurfaceArea(){
    return 6 * Math.pow(this.area, 2);
  }
}

//==================================== Object ===================================
const cube = new CubeMaker({
  length: 4,
  width: 5,
  height: 5,
  area: 5
});
console.log('********************* Stretch *********************')
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130
console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150