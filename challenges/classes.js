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

// class CubeMaker {
//     constructor(cube){
//         super(cube);
//     }
//     createCube(x){
//         for(let i = 0; ; i++){

//         }
//     }
// }

const cub = new CubMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(cub.volume()); // 100
console.log(cub.surfaceArea()); // 130

console.log("<---------------------Assignment Classes: End--------------------->");