// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cuboid) {
    this.length = cuboid.length;
    this.width = cuboid.width;
    this.height = cuboid.height;
  }

  volume() {
    let formulatedVolume = this.length * this.width * this.height;
    return `Calculated current volume Cuboid to be ${formulatedVolume}`;
  }

  surfaceArea() {
    let formulatedSurface =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);

    return `Calculated current surface Cuboid to be ${formulatedSurface}`;
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cuboid) {
        super(cuboid)
    }

    // Methods
    volume() {
        let formulatedVolume = this.length * this.width * this.height;
        return `Calculated current volume Cuboid to be ${formulatedVolume}`;
    }

    surfaceArea() {
        let formulatedSurface =
            2 *
            (this.length * this.width +
                this.length * this.height +
                this.width * this.height);

        return `Calculated current surface Cuboid to be ${formulatedSurface}`;
    }
}

const cube = new CubeMaker({
    length: 2,
    width: 3,
    height: 5
})

console.log(
    cube,
    cube.volume(cube),
    cube.surfaceArea(cube)
)