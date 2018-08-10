// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Copy and paste your prototype in here and refactor into class syntax.

//with stretch included

class CubeMaker {
  constructor(cube_attr){
    this.side = cube_attr.side;
  }
  cube_volume(){
    return this.side * this.side * this.side;
  }
  cube_surfaceArea(){
    return 2 * (this.side * this.side + this.side * this.side + this.side * this.side);
  }
}

class CuboidMaker extends CubeMaker {
  constructor(attr){
    super(attr);
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class Cuboid extends CuboidMaker {
  constructor(cubo_attr){
    super(cubo_attr);
  }
}

class Cube extends CuboidMaker {
  constructor(cub_attr){
    super(cub_attr);
  }
}

const cube_1 = new Cube({
  'side': 4,
})

const cuboid_1 = new Cuboid({
  'length': 4,
  'width': 5,
  'height': 5,
})

//test for cuboid
console.log(cuboid_1.volume()); // 100
console.log(cuboid_1.surfaceArea()); // 130
//tets for cube stretch
console.log(cube_1.cube_volume()); // 64
console.log(cube_1.cube_surfaceArea()); // 96