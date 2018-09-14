// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor (CMattributes) {
    this.length = CMattributes.length;
    this.width = CMattributes.width;
    this.height = CMattributes.height;
  }


  volume () {
    return (this.length * this.width * this.height)
  }

  surfaceArea() {
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  )
  }

}
  const cubeThing = new CuboidMaker ({
    'length': 4,
    'width' : 5,
    'height' : 5
  })


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubeThing.volume()); // 100
console.log(cubeThing.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor (CubeAttributes) {
    super (CubeAttributes)
  }
CVolume() {
return (this.length * this.length * this.length)
}

CSurfaceArea() {
return (this.length * this.length * 6)
}
}

const MyCube = new CubeMaker ({
  'length' : 4
})


console.log(MyCube.CVolume());
console.log(MyCube.CSurfaceArea());


