// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(props){
    super(props);
  }
  volume() {
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
}

const cube = new CubeMaker({
  length: 5,
});

console.log(cube.volume());//125
console.log(cube.surfaceArea());//150

//Let's have some fun
//pyramid extends off cuboidmaker

class PyramidMaker extends CuboidMaker {
  constructor(props){
    super(props);
  }
  volume() {
    return Math.floor((this.length * this.width * this.height) / 3);
  }
  surfaceArea() {
    return Math.floor((this.length * this.width) + (this.length * Math.sqrt(Math.pow((this.width/2), 2) + Math.pow(this.height, 2))) + (this.width * Math.sqrt(Math.pow((this.length/2), 2) + Math.pow(this.height, 2))));
  }
}

const pyramid = new PyramidMaker({
  length: 5,
  width: 7,
  height: 10,
});

console.log(pyramid.volume());//116
console.log(pyramid.surfaceArea());//160

//conemaker extends off cuboidmaker, adding radius

class ConeMaker extends CuboidMaker{
  constructor(props){
    super(props);
    this.radius = props.radius;
  }
  volume(){
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * (this.height/3));
  }
  surfaceArea(){
    return Math.floor(Math.PI * this.radius * (this.radius + Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.radius, 2))));
  }
}

const cone = new ConeMaker({
  height: 5,
  radius: 8,
});

console.log(cone.volume());//335
console.log(cone.surfaceArea());//438

//spheremaker extends off conemaker which extends off cuboidmaker

class SphereMaker extends ConeMaker {
  constructor(props){
    super(props);
  }
  volume(){
    return Math.floor((4/3) * Math.PI * Math.pow(this.radius, 3));
  }
  surfaceArea(){
    return Math.floor(4 * Math.PI * Math.pow(this.radius, 2));
  }
}

const sphere = new SphereMaker({
  radius: 9,
});

console.log(sphere.volume()); //3053
console.log(sphere.surfaceArea()); //1017
