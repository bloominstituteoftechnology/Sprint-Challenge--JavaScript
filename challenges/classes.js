// 1. Copy and paste your prototype in here and refactor into class syntax.
console.log(`**********classes.js**********`)
class CuboidCreator {
    constructor(properties){
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }
    //Methods of CuboidMaker
    volume = () => this.length * this.width * this.height;

    surfaceArea(){
        return 2* (this.length * this.width + this.length * this.height + this.width * this.height);
    } 
}

class CubeMaker extends CuboidCreator {
    constructor(properties){
        super(properties);
    }
    //Volume formula is the same as the parents so there is no point in adding it again
    surfaceArea = () => (this.length * this.length) * 6;
}

const cuboidNew = new CuboidCreator({
  length: 4,
  width: 5,
  height: 5,
})

const cube1 = new CubeMaker({
    length: 4,
    width: 4,
    height:4,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidNew.volume()); // 100
console.log(cuboidNew.surfaceArea()); // 130

console.log(cube1.volume());
console.log(cube1.surfaceArea());
console.log(`**********classes.js**********`)

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.