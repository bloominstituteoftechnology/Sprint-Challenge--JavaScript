// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(attributes){
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }
  
//   CuboidMaker.prototype.volume = function(){
//     return (this.length * this.width * this.height);
//   }
  
//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this. height + this.width * this.height);
//   }
  
//   let cuboid =  new CuboidMaker({
//       "length" : 4,
//       "width": 5,
//       "height": 5
//   });

  //end prototype

  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

  //Class CuboidMaker
  class CuboidMaker{
      //constructor
      constructor(makerAttributes){
          this. length = makerAttributes.length;
          this.width = makerAttributes.width;
          this.height = makerAttributes.height
      }

      //methods
      volume(){
        return (this.length * this.width * this.height);
      }

      surfaceArea(){
        return 2 * (this.length * this.width + this.length * this. height + this.width * this.height);
      }
  }//End - Class CuboidMaker

  //Class CubeMaker
  class CubeMaker extends CuboidMaker{
      //constructor
      constructor(cubeAttributes){
          super(cubeAttributes);
          this.sides  = cubeAttributes.sides;
      }

      surfaceArea(){
          return this.sides * (this.width * this.height);
      }
  }//End - Class CubeMaker

//Create Objects
  let cuboid = new CuboidMaker({
      "length": 4,
      "width": 5,
      "height": 5
  });

  let cube = new CubeMaker({
    "length": 4,
    "width": 5,
    "height": 5,
    //I know this can be hard coded into class as it wont change. Wanted to keep it dynamic for experimentation purposes
    "sides" : 6
  })


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());
