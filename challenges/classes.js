// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor (parms) {
        this.lenght = parms.length
        this.width = parms.width
        this.height = parms.height
    }

    volume() {
        return this.lenght * this.width * this.height
    }

    surfaceArea() {
        return 2 * (this.lenght * this.width + this.lenght * this.height + this.width * this.height)
    }

}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
    constructor(parms){
        super(parms)
    }

    volume(){
        return Math.pow(this.width, 3)
    }

    surfaceArea(){
        return 6 * Math.pow(this.width, 2)
    }
}

const cube = new CubeMaker({
    lenght: 4,
    width: 4,
    height: 4
})

console.log(cube.volume())
console.log(cube.surfaceArea())