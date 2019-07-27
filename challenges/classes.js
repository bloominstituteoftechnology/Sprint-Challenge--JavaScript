// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(attributes){
        this.length = attributes.lenght,
        this.width = attributes.width,
        this.height = attributes. height   
    }
    volume(){
        console.log(`${this.length} * ${this.width} * ${this.height}`);
    }   
}

class SurfaceArea extends CuboidMaker{
    constructor(surfacaAreaAttr){
        super(surfacaAreaAttr);
        this.volume = surfacaAreaAttr.volume;
    }
    surfaceArea(){
        console.log(`2 * ${this.length} * ${this.width} + ${this.length} * ${this.height} + ${this.width} * ${this.height}`);
    }
}

const newCuboid = new CuboidMaker({
    lenght: 4,
    width: 5,
    height: 5
  });

const newSurface = new SurfaceArea({
    lenght: 4,
    width: 5,
    height: 5
  });   
  

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(newCuboid.volume()); // 100
console.log(newSurface.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.