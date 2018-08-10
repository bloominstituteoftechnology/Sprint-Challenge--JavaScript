// Copy and paste your prototype in here and refactor into class syntax.


// function CuboidMaker(sides){
//   this.length = sides.length;
//   this.height = sides.height;
//   this.width = sides.width;
// };


class CuboidMaker {
  constructor(sides){
    this.length = sides.length;
    this.width = sides.width;
    this.height = sides.height;
  };
  volume(){
    return (this.height * this.length * this.width);
  };
  surfaceArea(){
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  };
};
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(sides){
    super(sides);
    this.length = sides.length;
  };
  volume(){
    return (this.length * this.length * this.length);
  };
  surfaceArea(){
    return (6 *(this.length * this.length));
  };

};

const cube = new CubeMaker({
  length: 8
});

console.log(cube.volume());
console.log(cube.surfaceArea());