// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(info)   {
        this.length = info.length;
        this.width = info.width;
        this.height = info.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea()  {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class Cube extends CuboidMaker  {
    constructor(info)   {
        super({
            length: info.length,
            width: info.length,
            height: info.length,
        })  //Used super to inherit length, width, height. However didn't pass the same object
            //as I would to CuboidMaker since cubes should be equal on all sides.

    }
    volume()    {
        return this.length*this.length*this.length;
    }   //even though Cube would inherit volume I adjusted the volume method to better fit a cube
    surfaceArea()   {
        return 6*(this.length*this.length)
    }   //Again, Cube would inherit surfaceArea from CuboidMaker, but I adjusted it to be more simple
        //for the cube.
    //I finished with two hours left to go, so I decided to add in a more complex method. This one is not shared by CuboidMaker.
    spaceNotFilledBySphere()    {
        let radius = this.length/2
        return this.volume() - (4/3)*(Math.PI*radius*radius*radius);
    }
    //this is the volume of the cube that would not be taken up by the
    //volume of a sphere that sits in the center of a cube with sides that are tangent
    //to the center of the cubes sides.
}
const cube = new Cube({
    length: 4,
})
console.log(cube.volume());
console.log(cube.surfaceArea());
console.log(cube.spaceNotFilledBySphere())
