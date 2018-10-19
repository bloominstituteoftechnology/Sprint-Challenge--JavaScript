// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


console.log("<---------------------Assignment Classes: Start--------------------->");

class CubMaker {
  constructor(cubAttr) {
    this.length = cubAttr.length;
    this.width = cubAttr.width;
    this.height = cubAttr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return ( 2 *(this.length * this.width + this.length * this.height + this.height * this.width));
  }
}



const cub = new CubMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(cub.volume()); // 100
console.log(cub.surfaceArea()); // 130

console.log("<---------------------Assignment Classes: Stretch Start--------------------->");

class CubeMaker extends CubMaker {
    constructor(cube){
        super(cube);
    }
    createCube(){
        let x;
        let array = Object.values(this);
        for(let i = 0; i < array.length; i++){
            if(array[i] >= array[i - 1]){
                x = array[i];
            }else if(array[i] < array[i - 1]){
                x = array[i - 1];
            }
           
        }
        let surfaceArea = 6 * x * x;
        let volume = x * x;
        let result = `Cube Surface Area: ${surfaceArea}, Cube Volume: ${volume}`;
        console.log(result);
    }
}

const cube = new CubeMaker({
    length: 6,
    width: 5,
    height: 8
});

cube.createCube();
console.log("<---------------------Assignment Classes: Stretch End--------------------->");
console.log("<---------------------Assignment Classes: End--------------------->");