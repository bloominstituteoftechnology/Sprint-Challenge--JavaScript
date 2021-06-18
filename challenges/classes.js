// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height
    }
    volume() {return this.length * this.height * this.width};
    surfaceArea() {return  2 * (this.length * this.width + this.length * this.height + this.width * this.height)};
}
  
  
let cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
//Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130