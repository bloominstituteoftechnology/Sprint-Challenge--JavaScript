class CuboidMakers {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return (this.length * this.width * this.height);
      }
    surfaceArea(){
        return (2 * ((this.length * this.width) + (this.width * this.height )+ (this.length * this.height)));
    }
  }

  const cuboids = new CuboidMakers(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboids.volume()); // 100
console.log(cuboids.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.