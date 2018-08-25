// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume() {
     return this.length * this.width * this.height;
  };
  surfaceArea() {
     function add(a, b, c) {
      return a + b + c;
    }
     return 2 * add((this.length * this.height), (this.length * this.height), (this.width * this.height));
  };
}



const cuboid = new CuboidMaker({length:4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 1130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those 
  methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker{
  constructor (cubeProp){
    super(cubeProp)
    this.sides = cubeProp.sides;
  }
  cubeVolume(){
    return Math.pow(this.sides, 3)
  }
  cubeSA(){
   let cubeArea= function(){
      retrun Math.pow(this.sides, 2)
    };
    return 6 * cubeArea();
  } 
}
const cube = new Cube({
  sides: 5,
})
console.log(cube.cubeVolume());
// NEED TO FIX CUBE SURFACE AREA