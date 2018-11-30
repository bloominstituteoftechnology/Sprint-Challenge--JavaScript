// 1. Copy and paste your prototype in here and refactor into class syntax.

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

// == Step 1: Base Constructor ==

class CuboidMakerClass {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  // == Step 2: Volume Method ==
  volume() {
    return `Volume of a cuboid: ${this.length * this.width * this.height}`;
  }
  // == Step 3: Surface Area Method ==
  surfaceArea() {
    return `Surface area of a cuboid: ${2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)}`;
  }
}

// == Step 4: Create a new object that uses CuboidMaker ==
const cuboidClass = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// =========================================== Stretch Task ==========================================
//============ Cube Maker
//Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(cubeAtrributes) {
    super(cubeAtrributes);
  }
  cubeVol() {
    return `Volume of a cube: ${this.length * this.length * this.length}`;
  }
  cubeSA() {
    return `Surface area of a cube: ${6 * (this.length * this.length)}`;
  }
}
const cube = new CubeMaker({
  length: 4
});

console.log(cube.cubeVol());
console.log(cube.cubeSA());

//============= Cylinder maker ===============
class CylinderMaker extends CuboidMakerClass {
  constructor(cylinAttributes) {
    super(cylinAttributes);
    this.diameter = cylinAttributes.diameter;
  }
  cylinVol() {
    let radius = this.diameter / 2;
    return `Volume of a cylinder: ${(
      Math.PI *
      (radius * radius) *
      this.height
    ).toFixed(2)}`;
  }
  cylinSA() {
    let radius = this.diameter / 2;
    return `Surface area of a cylinder: ${(
      2 * Math.PI * radius * this.height +
      2 * Math.PI * (radius * radius)
    ).toFixed(2)}`;
  }
}

const cylinder = new CylinderMaker({
  height: 7,
  diameter: 4
});

console.log(cylinder.cylinVol());
console.log(cylinder.cylinSA());

//============= Sphere maker ===================
class SphereMaker extends CylinderMaker {
  constructor(spAttributes) {
    super(spAttributes);
  }
  sphereVol() {
    let radius = this.diameter / 2;
    return `Volume of a sphere: ${(
      (4 / 3) *
      Math.PI *
      (radius * radius * radius)
    ).toFixed(2)}`;
  }
  sphereSA() {
    let radius = this.diameter / 2;
    return `Surface area of a Sphere: ${(4 * Math.PI * radius * radius).toFixed(
      2
    )}`;
  }
}

const sphere = new SphereMaker({
  diameter: 10
});

console.log(sphere.sphereVol());
console.log(sphere.sphereSA());

//============= Cone maker ===================
class ConeMaker extends CylinderMaker {
  constructor(coneAttributes) {
    super(coneAttributes);
  }
  coneVol() {
    let radius = this.diameter / 2;
    return `Volume of a cone: ${(
      (Math.PI * (radius * radius) * this.height) /
      3
    ).toFixed(2)}`;
  }
  coneSA() {
    let radius = this.diameter / 2;
    let s = Math.sqrt(radius * radius + this.height * this.height);
    return `Surface area of a cone: ${(Math.PI * radius * (radius + s)).toFixed(
      2
    )}`;
  }
}

const cone = new ConeMaker({
  diameter: 6,
  height: 10
});

console.log(cone.coneVol());
console.log(cone.coneSA());
