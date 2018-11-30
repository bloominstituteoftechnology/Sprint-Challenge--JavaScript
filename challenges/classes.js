// 1. Copy and paste your prototype in here and refactor into class syntax.


  class NewCuboidMaker {
      constructor(cuboid) {
        this.length = cuboid.length;
        this.width = cuboid.width;
        this.height = cuboid.height;
      }
      volume() {
        return this.length * this.width * this.height;

      }
      surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }


  const cuboidClass = new NewCuboidMaker({
    length:4,
    width: 5,
    height: 5
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboidClass.volume()); // 100
  console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends NewCuboidMaker {
    constructor(cube) {
        super(cube);
    }
    surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker({
  length: 2, 
  width: 2,
  height: 2
});

console.log(cube.volume());
console.log(cube.surfaceArea());

class PyramidMaker extends NewCuboidMaker {
  constructor(cyl) {
    super(cyl);
  }
  volume() {
    let vol = (this.length * this.width * this.height) / 3;
    return vol.toFixed(2);
  }
  surfaceArea() {
    let sa = this.length * this.width + this.length * Math.sqrt(Math.pow(this.width*.5, 2) + Math.pow(this.height, 2))  + this.width * Math.sqrt(Math.pow(this.length*.5, 2) + Math.pow(this.height, 2));
    return sa.toFixed(2);
  }
}

const pyramid = new PyramidMaker({
  length: 6,
  width: 4,
  height: 6
})

console.log(pyramid.volume());
console.log(pyramid.surfaceArea());

class Sphere {
  constructor(sphere) {
    this.radius = sphere.radius;
  }
  volume() {
    let vol = (4/3) * Math.PI * Math.pow(this.radius, 3);
    return vol.toFixed(2);
  }
  surfaceArea() {
    let sa = 4 * Math.PI * Math.pow(this.radius, 2);
    return sa.toFixed(2);
  }
}

class Cylinder extends Sphere {
  constructor(cyl) {
    super(cyl);
    this.height = cyl.height;
  }
  volume() {
    let vol = Math.PI * Math.pow(this.radius, 2) * this.height;
    return vol.toFixed(2);
  }
  surfaceArea() {
    let sa = 2 * Math.PI * this.radius * this.height + 2 * Math.PI * Math.pow(this.radius, 2);
    return sa.toFixed(2);
  }
  baseArea() {
    let ba = Math.PI * Math.pow(this.radius, 2);
    return ba.toFixed(2);
  }

}

class Cone extends Cylinder {
  constructor(cone) {
    super(cone);
  }
  slantHeight() {
    let sh = Math.sqrt(Math.pow(this.height,2) + Math.pow(this.radius, 2));
    return sh.toFixed(2);
  }
  volume() {
    let vol = Math.PI * Math.pow(this.radius, 2) * (this.height / 3);
    return vol.toFixed(2);
  }
  surfaceArea() {
    let sa = Math.PI * this.radius * (this.radius + Math.sqrt(Math.pow(this.height,2) + Math.pow(this.radius, 2)));
    return sa.toFixed(2);
  }
}

const sphere = new Sphere({
  radius: 3
})

const cylinder = new Cylinder({
  radius: 2,
  height: 8
})

const cone = new Cone({
  radius: 5,
  height: 9
});

console.log(sphere.volume());
console.log(sphere.surfaceArea());
console.log(cylinder.surfaceArea());
console.log(cylinder.volume());
console.log(cone.volume());
console.log(cone.slantHeight());
console.log(cone.surfaceArea());
console.log(cylinder.baseArea());
console.log(cone.baseArea());