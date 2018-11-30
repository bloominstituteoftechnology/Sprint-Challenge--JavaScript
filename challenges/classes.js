
/* ===== CLASSES ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMakers {
    constructor(notACube){
    this.length = notACube.length;
    this.width = notACube.width;
    this.height = notACube.height;
  }
    volume() {
    console.log(this.length * this.width * this.height);
    }
    surfaceArea() {
    console.log( 2 * (this.length * this.width + this.length * this.height + this.width * this.height))
    }
}


class CubeMaker extends CuboidMakers{
  constructor(cubes){
    super(cubes);
     this.sides = cubes.sides;
  }
  volumes(){
    console.log(this.length * this.length * this.length);
  }
 
  surfaceAreas(){
    console.log(6 * Math.pow(this.length,2))
  }
  }


  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  

  
  
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  

  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboids = new CuboidMakers ({
    length: 4,
    width: 5,
    height: 5
  });
  
  const cubeMaths = new CubeMaker ({
    length: 5,
    width: 5,
    height: 5,
    sides: 4
  });
  
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  cuboids.volume(); // 100
  cuboids.surfaceArea(); // 130
  cubeMaths.volumes();
  cubeMaths.surfaceAreas();
  
  
  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
