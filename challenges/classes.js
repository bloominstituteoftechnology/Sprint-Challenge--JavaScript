// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(cuboidAttributes) {
        this.length = cuboidAttributes.length;
        this.width = cuboidAttributes.width;
        this.height = cuboidAttributes.height;
    }
    volume() {
        const volume = this.length * this.width * this.height;
        return `Vulume of cuboid: ${volume}`;
    }

    surfaceArea(){
        const surfaceArea = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
        return `Surface area of cuboid: ${surfaceArea}`;
    }
}

const cuboid2 = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface 
//area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(cubeAttributes){
        super(cubeAttributes);
    }

    cubeVolume() {
        const volume = Math.pow(this.width, 3); 
        return `Volume of cube: ${volume}`;
    }

    cubeSurfaceArea() {
        const surfaceArea = 6 * (this.width ** 2);
        return `Surface area of cube: ${surfaceArea}`;
    }
}

const cube = new CubeMaker ({
    length: 3,
    width: 3,
    height: 3
  });

console.log(cube.cubeVolume()); // 27
console.log(cube.cubeSurfaceArea()); // 54