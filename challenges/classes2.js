class CuboidMaker {
    constructor(options){
        this.length = options.length; // refers to the length property
        this.width = options.width; // refers to the width property
        this.height = options.height; // refers to the height object
    }

          /* == Step 2: Volume Method ==
              Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
              
              Formula for cuboid volume: length * width * height
            */

        volume() { // this is a method made inside of our cuboidMaker object
            return this.length * this.width * this.height;
        };

            /* == Step 3: Surface Area Method ==
                Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
            
                Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
            */
        surfaceArea() { //this is a method made inside of our cuboidMaker object
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        }
    
}

console.log(CuboidMaker);

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker({"length": 4, "width": 5, "height": 5}); //Make an instance fo the cuboidMarker object
console.log(cuboid);

console.log(cuboid.volume());
console.log(cuboid.surfaceArea());

/* Stretch Task:
  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.
*/

class cubeMaker extends CuboidMaker{
    constructor(option){ //cubeMaker inherits properties from CuboidMaker, the base object
        super(option)

    }
    prism(){ // this is a method unique only to instances of cubeMaker
        return this.length * this.width * this.height; 
    }
}

const cube = new cubeMaker({"length": 4, "width": 5, "height": 6}); // an instance of cubeMaker

console.log(cube.prism()); //call method that is on the cubeMaker object