// 1. Copy and paste your prototype in here and refactor into class syntax.

// I have to leave this part commented out, for the prototype to run in console. Otherwise error message "Cuboidmaker has already been declared."
// class CuboidMaker{
//     constructor(att){
//       this.height  = att.height;
//      this.width = att.width;
//       this.length = att.length;
  
//     }
//     volume  (att){
//    return this.length*this.width*this.height;
//     }
//     surfaceArea(att){
//       return 2*(this.length * this.width +this.length *this.height+ this.width * this.height );
//     }
  
//   }

//   var cuboid  = new CuboidMaker({
//     height:5,
//    width:5,
//    length :4
//  })
// // Test your volume and surfaceArea methods by uncommenting the logs below:
//  console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface
// //  area.

class CubeMaker extends CuboidMaker{
    constructor(att){
      super(att)
      this.height = att.height;
      this.length = this.height;
      this.width = this.height;
    }
    cubeVolume(att){
      return this.height*this.length*this.width;
    }
   cubeSA (att){
    return  6 *(this.height * this.height)
  }
  }

  var cube = new CubeMaker({
    height :4,
    width : 4,
    length : 4
  })
  
  console.log(cube.cubeVolume())
console.log(cube.cubeSA());
