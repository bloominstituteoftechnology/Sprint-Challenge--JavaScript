// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(props){
        this.len = props.len;
        this.width = props.width;
        this.height = props.height;
    }
    volume() {
        return this.len * this.width * this.height;
      }
    surfaceArea() {
        return 2 * (this.len * this.width + this.len * this.height + this.width * this.height);
    }
  }
  
const cuboid2 = new CuboidMaker2({
    len: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(props){
        super(props);
        this.vol = this.volume();
        this.area = this.surfaceArea();
        this.amICube();
    }

    amICube(){
        if(this.len === this.width && this.len === this.height){
            console.log(`Yup, I'm a cube!`);
        } else {
            this.width = this.len;
            this.height = this.len;
            this.vol = this.volume();
            this.area = this.surfaceArea();
            console.log(`Not a cube, yo! Don't worry I made you a cube based on your length(${this.len})!`);
        }
    };

    volume(){
        return this.len ** 3;
    }

    surfaceArea(){
        return 6 * this.len ** 2;
    }

    faceDiagonal(){
        return Math.sqrt(2) * this.len; 
    }

    spaceDiagonal(){
        return Math.sqrt(3) * this.len; 
    }
}

const cube = new CubeMaker({
    len: 4,
    width: 4,
    height: 4
})

const notCube = new CubeMaker({
    len: 4,
    width: 5,
    height: 5
})

console.log(cube.vol);
console.log(cube.area);
console.log(notCube.vol);
console.log(notCube.area);
cube.amICube();
notCube.amICube();
console.log(cube.faceDiagonal());
console.log(cube.spaceDiagonal());