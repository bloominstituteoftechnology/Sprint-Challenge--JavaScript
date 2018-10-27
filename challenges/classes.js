// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//  Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker{
   constructor(attributes) {
       this.length = attributes.length;
       this.width = attributes.width;
       this.height = attributes.height;
   }
   volume(){
       const value =this.length*this.width*this.height;
       return(`The volume of the cuboid is ${value} `);
   }

   surfaceArea(){
       const value = 2 * (this.length *this.width + this.length * this.height + this.width * this.height);
       return(`The surfaceArea  of the cuboid is ${value} `);

   }
}



const cuboid = new CuboidMaker({
    length:4,
    width:5,
    height:5

})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

class CubeMaker extends CuboidMaker{
    constructor(cubeAttributes){
        super(cubeAttributes);
    }
    volume(){
        const value =this.length*this.length*this.length;
        return(`The volume of the cuboid is ${value} `);
    }

    surfaceArea(){
        const value=6*this.length*this.length;
        return(`The volume of the cuboid is ${value} `);
    }
}
const cube = new CubeMaker({
    length:7,
    width:7,
    height:7
})
console.log(cube.volume());
console.log(cube.surfaceArea());