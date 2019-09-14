// COPY & PASTED

class CuboidMaker2 {
    constructor (cuboidAttribs) {
    this.length = cuboidAttribs.length;
    this.width = cuboidAttribs.width;
    this.height = cuboidAttribs.height;
  }
    volume () {
        return this.length * this.width * this.height;
    }
    surfaceArea () {
        return 2 * (
        this.length * this.width + 
        this.length * this.height + 
        this.width * this.height);
    }  
}

  const cuboid2 = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
  });
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
  

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor (cubeAttributes) {
        super(cubeAttributes);
        this.side = cubeAttributes.side;
    }
        cubevolume () {
            return `formula for volume for a cube.`;
        }
        cubesa () {
            return `formula for surface area for a cube.`;
        }
    }

const testcube = new CubeMaker ({
    side: 3
});

console.log(testcube.cubevolume());
console.log(testcube.cubesa());