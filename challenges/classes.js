//copy from prototypes (my console did not like the previous comment for some reason. Had to comment it out because it was giving my console an error for having"

// function CuboidMaker(mea){
//     this.length = mea.length;
//     this.width = mea.width;
//     this.height = mea.height;
//   }

class CuboidMakerClass{
    constructor(measurement){
        this.length = measurement.length;
        this.width = measurement.width;
        this.height = measurement.height;
    }
    vol(){
        return this.length * this.width * this.height;
    }

    surface(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

}// end of CubiodMaker

  let cuboidFromClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidFromClass.vol()); // 100
console.log(cuboidFromClass.surface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
//  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass{
    constructor (measurement){
        super(measurement)
    }
    cubeVol() {
        return this.length * this.width * this.height;
    }

    cubeSurface() {
        return 6* (this.length ^ 2);
    }
    
}// end of CubeMaker

let testCube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5
})

console.log(testCube.cubeVol());
console.log(testCube.cubeSurface());