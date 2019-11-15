// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
//  Test your work by logging out your volume and surface area.

 class CuboidMakerClass {
     constructor(obj){
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
     }

     volume(){
        return this.length * this.width * this.height
     }

     surfaceArea(){
        let answer = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        return answer
     }
  }

  class CubeMaker extends CuboidMakerClass {
    constructor(length){
        super(length)

        this.name = 'Cube'
    }
    getVolume(){
        return Math.pow(this.length , 3)
    }

    getSurface(){
        return Math.pow(this.length, 6)
    }
  }

  const cube = new CubeMaker({
      length: 2,
      width: 2,
      height: 2
  })
  console.log(cube.getVolume())  // expected 8
  console.log(cube.getSurface()) // expected 64