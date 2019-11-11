// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attributes) {
    (this.width = attributes.width),
      (this.height = attributes.height),
      (this.length = attributes.length);
  }
  volume() {
    return this.width * this.height * this.length;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const newCube = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(newCube.volume()); // 100
console.log(newCube.surfaceArea()); // 130
