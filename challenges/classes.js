// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
    volume() {
       console.log(`${this.length * this.width * this.height}`);
     }
     surfaceArea() {
       console.log(2 * (`${this.length * this.width + this.length * this.height + this.width * this.height}`));
     }
  }
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });
  
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  