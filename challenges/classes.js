// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerES6 {
  constructor(cuboidAttrs){
    this.length = cuboidAttrs.length;
    this.width = cuboidAttrs.width;
    this.height = cuboidAttrs.height;
  }

  volume() {
    return `Volume: ${this.length * this.width * this.height}`;
  }

  surfaceArea() {
    return `Surface Area: ${((this.length*this.width) + (this.length*this.height) + (this.width*this.height))*2}`
  }

  display2DCuboid(){
    const theCuboid = document.createElement('DIV');
    theCuboid.style.cssText = `width: ${this.length}px; height: ${this.height}px; background-color: red`;
    document.querySelector('body').appendChild(theCuboid);
    console.log(`Displaying 2D rectangle using length and height property`)
  }
}

const cuboidES6 = new CuboidMakerES6({
  length: 4,
  width: 5,
  height: 5
});

const cuboid2 = new CuboidMakerES6({
  length: 200,
  width: 5,
  height: 50
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboidES6.volume()); // 100
 console.log(cuboidES6.surfaceArea()); // 130
cuboid2.display2DCuboid();



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// This will only use the width property to make the cube
class CubeMaker extends CuboidMakerES6 {
  constructor(cubeAttrs){
    super(cubeAttrs);
  }

  cubeVolume(){
    return `Cube Volume: ${Math.pow(this.width, this.width)}`
  }

  cubeSurfaceArea(){
    return `Cube Surface Area: ${Math.pow(this.width, 2) * 6}`
  }
}

const newCube = new CubeMaker({
  width: 3
});

console.log(newCube.cubeVolume());
console.log(newCube.cubeSurfaceArea());